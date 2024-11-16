// @ts-nocheck
// Preventing TS checks with files presented in the video for a better presentation.
import type { Message } from 'ai';
import React, { type RefCallback, useEffect } from 'react';
import { View, TextInput, StyleSheet, Picker, Text } from 'react-native';
import { IconButton } from '~/components/ui/IconButton';
import { useState } from 'react';
import { APIKeyManager } from './APIKeyManager';
import Cookies from 'js-cookie';

import type { ProviderInfo } from '~/utils/types';

const EXAMPLE_PROMPTS = [
  { text: 'Build a todo app in React using Tailwind' },
  { text: 'Build a simple blog using Astro' },
  { text: 'Create a cookie consent form using Material UI' },
  { text: 'Make a space invaders game' },
  { text: 'How do I center a div?' },
];

const providerList = PROVIDER_LIST;

const ModelSelector = ({ model, setModel, provider, setProvider, modelList, providerList }) => {
  return (
    <View style={styles.selectorContainer}>
      <Picker
        selectedValue={provider?.name}
        onValueChange={(itemValue) => {
          setProvider(providerList.find((p) => p.name === itemValue));
          const firstModel = [...modelList].find((m) => m.provider == itemValue);
          setModel(firstModel ? firstModel.name : '');
        }}
        style={styles.picker}
      >
        {providerList.map((provider) => (
          <Picker.Item key={provider.name} label={provider.name} value={provider.name} />
        ))}
      </Picker>
      <Picker
        selectedValue={model}
        onValueChange={(itemValue) => setModel(itemValue)}
        style={styles.picker}
      >
        {[...modelList]
          .filter((e) => e.provider == provider?.name && e.name)
          .map((modelOption) => (
            <Picker.Item key={modelOption.name} label={modelOption.label} value={modelOption.name} />
          ))}
      </Picker>
    </View>
  );
};

const TEXTAREA_MIN_HEIGHT = 76;

interface BaseChatProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement> | undefined;
  messageRef?: RefCallback<HTMLDivElement> | undefined;
  scrollRef?: RefCallback<HTMLDivElement> | undefined;
  showChat?: boolean;
  chatStarted?: boolean;
  isStreaming?: boolean;
  messages?: Message[];
  enhancingPrompt?: boolean;
  promptEnhanced?: boolean;
  input?: string;
  model?: string;
  setModel?: (model: string) => void;
  provider?: ProviderInfo;
  setProvider?: (provider: ProviderInfo) => void;
  handleStop?: () => void;
  sendMessage?: (event: React.UIEvent, messageInput?: string) => void;
  handleInputChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  enhancePrompt?: () => void;
}

export const BaseChat = React.forwardRef<View, BaseChatProps>(
  (
    {
      textareaRef,
      messageRef,
      scrollRef,
      showChat = true,
      chatStarted = false,
      isStreaming = false,
      enhancingPrompt = false,
      promptEnhanced = false,
      messages,
      input = '',
      model,
      setModel,
      provider,
      setProvider,
      sendMessage,
      handleInputChange,
      enhancePrompt,
      handleStop,
    },
    ref,
  ) => {
    const TEXTAREA_MAX_HEIGHT = chatStarted ? 400 : 200;
    const [apiKeys, setApiKeys] = useState<Record<string, string>>({});
    const [modelList, setModelList] = useState([]);

    useEffect(() => {
      // Load API keys from cookies on component mount
      try {
        const storedApiKeys = Cookies.get('apiKeys');
        if (storedApiKeys) {
          const parsedKeys = JSON.parse(storedApiKeys);
          if (typeof parsedKeys === 'object' && parsedKeys !== null) {
            setApiKeys(parsedKeys);
          }
        }
      } catch (error) {
        console.error('Error loading API keys from cookies:', error);
        // Clear invalid cookie data
        Cookies.remove('apiKeys');
      }

      initializeModelList().then((updatedModelList) => {
        setModelList(updatedModelList);
      });
    }, []);

    const updateApiKey = (provider: string, key: string) => {
      try {
        const updatedApiKeys = { ...apiKeys, [provider]: key };
        setApiKeys(updatedApiKeys);
        // Save updated API keys to cookies with 30 day expiry and secure settings
        Cookies.set('apiKeys', JSON.stringify(updatedApiKeys), {
          expires: 30, // 30 days
          secure: true, // Only send over HTTPS
          sameSite: 'strict', // Protect against CSRF
          path: '/', // Accessible across the site
        });
      } catch (error) {
        console.error('Error saving API keys to cookies:', error);
      }
    };

    return (
      <View
        ref={ref}
        style={styles.baseChat}
      >
        <View ref={scrollRef} style={styles.scrollContainer}>
          <View style={styles.chatContainer}>
            {!chatStarted && (
              <View style={styles.intro}>
                <Text style={styles.introTitle}>
                  Where ideas begin
                </Text>
                <Text style={styles.introSubtitle}>
                  Bring ideas to life in seconds or get help on existing projects.
                </Text>
              </View>
            )}
            <View style={chatStarted ? styles.chatStarted : styles.chatNotStarted}>
              {chatStarted && (
                <Messages
                  ref={messageRef}
                  style={styles.messages}
                  messages={messages}
                  isStreaming={isStreaming}
                />
              )}
              <View style={chatStarted ? styles.promptSticky : styles.prompt}>
                <ModelSelector
                  key={provider?.name + ':' + modelList.length}
                  model={model}
                  setModel={setModel}
                  modelList={modelList}
                  provider={provider}
                  setProvider={setProvider}
                  providerList={PROVIDER_LIST}
                />
                {provider && (
                  <APIKeyManager
                    provider={provider}
                    apiKey={apiKeys[provider.name] || ''}
                    setApiKey={(key) => updateApiKey(provider.name, key)}
                  />
                )}
                <View style={styles.textInputContainer}>
                  <TextInput
                    ref={textareaRef}
                    style={styles.textInput}
                    onSubmitEditing={(event) => {
                      if (!event.nativeEvent.shiftKey) {
                        event.preventDefault();
                        sendMessage?.(event);
                      }
                    }}
                    value={input}
                    onChangeText={(text) => {
                      handleInputChange?.({ target: { value: text } });
                    }}
                    multiline
                    placeholder="How can Bolt help you today?"
                  />
                  <SendButton
                    show={input.length > 0 || isStreaming}
                    isStreaming={isStreaming}
                    onClick={(event) => {
                      if (isStreaming) {
                        handleStop?.();
                        return;
                      }
                      sendMessage?.(event);
                    }}
                  />
                  <View style={styles.promptFooter}>
                    <IconButton
                      title="Enhance prompt"
                      disabled={input.length === 0 || enhancingPrompt}
                      onClick={() => enhancePrompt?.()}
                    >
                      {enhancingPrompt ? (
                        <>
                          <Text>Enhancing prompt...</Text>
                        </>
                      ) : (
                        <>
                          <Text>Enhance</Text>
                        </>
                      )}
                    </IconButton>
                    {input.length > 3 && (
                      <Text style={styles.promptHint}>
                        Use Shift + Return for a new line
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            </View>
            {!chatStarted && (
              <View style={styles.examples}>
                {EXAMPLE_PROMPTS.map((examplePrompt, index) => (
                  <Text
                    key={index}
                    onPress={() => sendMessage?.(null, examplePrompt.text)}
                    style={styles.examplePrompt}
                  >
                    {examplePrompt.text}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    );
  },
);
