[![Bolt.new: AI-Powered Full-Stack Web Development in the Browser](./public/social_preview_index.jpg)](https://bolt.new)

# Bolt.new Fork by Cole Medin

This fork of Bolt.new allows you to choose the LLM that you use for each prompt! Currently, you can use OpenAI, Anthropic, Ollama, OpenRouter, Gemini, or Groq models - and it is easily extended to use any other model supported by the Vercel AI SDK! See the instructions below for running this locally and extending it to include more models.

# Requested Additions to this Fork - Feel Free to Contribute!!

- ✅ OpenRouter Integration (@coleam00)
- ✅ Gemini Integration (@jonathands)
- ✅ Autogenerate Ollama models from what is downloaded (@yunatamos)
- ✅ Filter models by provider (@jasonm23)
- ✅ Download project as ZIP (@fabwaseem)
- ✅ Improvements to the main Bolt.new prompt in `app\lib\.server\llm\prompts.ts` (@kofi-bhr)
- ✅ DeepSeek API Integration (@zenith110)
- ✅ Mistral API Integration (@ArulGandhi)
- ✅ "Open AI Like" API Integration (@ZerxZ)
- ✅ Ability to sync files (one way sync) to local folder (@muzafferkadir)
- ✅ Containerize the application with Docker for easy installation (@aaronbolton)
- ✅ Publish projects directly to GitHub (@goncaloalves)
- ✅ Ability to enter API keys in the UI (@ali00209)
- ✅ xAI Grok Beta Integration (@milutinke)
- ⬜ **HIGH PRIORITY** - Prevent Bolt from rewriting files as often (file locking and diffs)
- ⬜ **HIGH PRIORITY** - Better prompting for smaller LLMs (code window sometimes doesn't start)
- ⬜ **HIGH PRIORITY** Load local projects into the app
- ⬜ **HIGH PRIORITY** - Attach images to prompts
- ⬜ **HIGH PRIORITY** - Run agents in the backend as opposed to a single model call
- ⬜ Mobile friendly
- ⬜ LM Studio Integration
- ⬜ Together Integration
- ⬜ Azure Open AI API Integration
- ⬜ HuggingFace Integration
- ⬜ Perplexity Integration
- ⬜ Vertex AI Integration
- ⬜ Cohere Integration
- ⬜ Deploy directly to Vercel/Netlify/other similar platforms
- ⬜ Ability to revert code to earlier version
- ⬜ Prompt caching
- ⬜ Better prompt enhancing
- ⬜ Have LLM plan the project in a MD file for better results/transparency
- ⬜ VSCode Integration with git-like confirmations
- ⬜ Upload documents for knowledge - UI design templates, a code base to reference coding style, etc.
- ⬜ Voice prompting

# Bolt.new: AI-Powered Full-Stack Web Development in the Browser

Bolt.new is an AI-powered web development agent that allows you to prompt, run, edit, and deploy full-stack applications directly from your browser—no local setup required. If you're here to build your own AI-powered web dev agent using the Bolt open source codebase, [click here to get started!](./CONTRIBUTING.md)

## What Makes Bolt.new Different

Claude, v0, etc are incredible- but you can't install packages, run backends, or edit code. That’s where Bolt.new stands out:

- **Full-Stack in the Browser**: Bolt.new integrates cutting-edge AI models with an in-browser development environment powered by **StackBlitz’s WebContainers**. This allows you to:
  - Install and run npm tools and libraries (like Vite, Next.js, and more)
  - Run Node.js servers
  - Interact with third-party APIs
  - Deploy to production from chat
  - Share your work via a URL

- **AI with Environment Control**: Unlike traditional dev environments where the AI can only assist in code generation, Bolt.new gives AI models **complete control** over the entire  environment including the filesystem, node server, package manager, terminal, and browser console. This empowers AI agents to handle the whole app lifecycle—from creation to deployment.

## Using New AI Models and Providers

Bolt.new supports a variety of AI models and providers, allowing you to choose the best fit for your project. Here's how to set up and use these models:

### Setting Up API Keys

To use different AI providers, you'll need to set up API keys. Follow these steps:

1. **Obtain API Keys**: 
   - **OpenAI**: Get your API key from [OpenAI's API keys page](https://platform.openai.com/api-keys).
   - **Anthropic**: Obtain your API key from [Anthropic's settings](https://console.anthropic.com/settings/keys).
   - **Groq**: Retrieve your API key from [Groq's console](https://console.groq.com/keys).
   - **Other Providers**: Follow similar steps on their respective platforms.

2. **Configure API Keys**: 
   - Rename `.env.example` to `.env.local`.
   - Add your API keys to the `.env.local` file:
     ```
     GROQ_API_KEY=your_groq_api_key
     OPENAI_API_KEY=your_openai_api_key
     ANTHROPIC_API_KEY=your_anthropic_api_key
     ```

### Selecting Models in the UI

Once your API keys are set up, you can select models directly in the Bolt.new UI:

1. **Open the Model Selector**: In the chat interface, locate the model selector dropdown.
2. **Choose a Provider**: Select your desired provider from the list.
3. **Select a Model**: Choose the specific model you wish to use for your prompts.

These steps ensure you can leverage the latest AI capabilities in your projects with Bolt.new.

Whether you’re an experienced developer, a PM, or a designer, Bolt.new allows you to easily build production-grade full-stack applications.

For developers interested in building their own AI-powered development tools with WebContainers, check out the open-source Bolt codebase in this repo!

## Quick Setup Guide

Follow these steps to get Bolt.new running locally:

## Building the APK for Android

To build an APK for Android devices, follow these steps:

1. **Install Prerequisites**:
   - [Node.js](https://nodejs.org/en/download/)
   - [Android Studio](https://developer.android.com/studio)
   - Ensure you have Java Development Kit (JDK) installed, which is required by Android Studio.

2. **Set Up Android Studio**:
   - Open Android Studio and install the necessary SDK tools.
   - Set up an Android Virtual Device (AVD) if you plan to test on an emulator.

3. **Build the APK**:
   - Navigate to the project directory in your terminal.
   - Run the following command to build the APK:
     ```bash
     pnpm run build:apk
     ```
   - This command uses Capacitor to build the APK. Ensure that Capacitor is properly configured in your project.

4. **Install the APK**:
   - Once the build is complete, you can find the APK in the `android/app/build/outputs/apk/debug` directory.
   - Transfer the APK to your Android device or use an emulator to install and test it.

## Running on Android Devices

To run Bolt.new on Android devices, follow these steps:

1. **Install React Native CLI**:
   - Ensure you have Node.js installed.
   - Install React Native CLI globally:
     ```bash
     npm install -g react-native-cli
     ```

2. **Set Up Android Environment**:
   - Install Android Studio from [developer.android.com](https://developer.android.com/studio).
   - Set up the Android SDK and ensure you have the necessary SDK tools installed.
   - Add the Android SDK's `platform-tools` to your system's PATH.

3. **Configure an Android Emulator**:
   - Open Android Studio and create a new virtual device using the AVD Manager.
   - Choose a device definition and a system image, then click "Finish" to create the emulator.

4. **Connect a Physical Device** (Optional):
   - Enable Developer Options and USB Debugging on your Android device.
   - Connect your device to your computer via USB.

5. **Run the Application**:
   - Start the Android emulator or connect your physical device.
   - Navigate to the project directory and run:
     ```bash
     react-native run-android
     ```
   - This will build the app and install it on the connected device or emulator.

1. **Install Prerequisites**:
   - [Git](https://git-scm.com/downloads)
   - [Node.js](https://nodejs.org/en/download/)

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/coleam00/bolt.new-any-llm.git
   cd bolt.new-any-llm
   ```

3. **Set Up Environment Variables**:
   - Rename `.env.example` to `.env.local`.
   - Add your API keys to `.env.local`:
     ```bash
     GROQ_API_KEY=your_groq_api_key
     OPENAI_API_KEY=your_openai_api_key
     ANTHROPIC_API_KEY=your_anthropic_api_key
     ```

4. **Install Dependencies**:
   ```bash
   pnpm install
   ```

5. **Start the Development Server**:
   ```bash
   pnpm run dev
   ```

### Using Docker for Setup

For an easier setup, you can use Docker:

1. **Build the Docker Image**:
   ```bash
   npm run dockerbuild
   ```

2. **Run the Docker Container**:
   ```bash
   docker-compose --profile development up
   ```

These steps will get you up and running with Bolt.new quickly. For more detailed instructions, refer to the sections below.

## Run with Docker

Prerequisites:

Git and Node.js as mentioned above, as well as Docker: https://www.docker.com/

### 1a. Using Helper Scripts

NPM scripts are provided for convenient building:

```bash
# Development build
npm run dockerbuild

# Production build
npm run dockerbuild:prod
```

### 1b. Direct Docker Build Commands (alternative to using NPM scripts)

You can use Docker's target feature to specify the build environment instead of using NPM scripts if you wish:

```bash
# Development build
docker build . --target bolt-ai-development

# Production build
docker build . --target bolt-ai-production
```

### 2. Docker Compose with Profiles to Run the Container

Use Docker Compose profiles to manage different environments:

```bash
# Development environment
docker-compose --profile development up

# Production environment
docker-compose --profile production up
```

When you run the Docker Compose command with the development profile, any changes you
make on your machine to the code will automatically be reflected in the site running
on the container (i.e. hot reloading still applies!).

## Run Without Docker

1. Install dependencies using Terminal (or CMD in Windows with admin permissions):

```
pnpm install
```

If you get an error saying "command not found: pnpm" or similar, then that means pnpm isn't installed. You can install it via this:

```
sudo npm install -g pnpm
```

2. Start the application with the command:

```bash
pnpm run dev
```

## Super Important Note on Running Ollama Models

Ollama models by default only have 2048 tokens for their context window. Even for large models that can easily handle way more.
This is not a large enough window to handle the Bolt.new/oTToDev prompt! You have to create a version of any model you want
to use where you specify a larger context window. Luckily it's super easy to do that.

All you have to do is:

- Create a file called "Modelfile" (no file extension) anywhere on your computer
- Put in the two lines:

```
FROM [Ollama model ID such as qwen2.5-coder:7b]
PARAMETER num_ctx 32768
```

- Run the command: 

```
ollama create -f Modelfile [your new model ID, can be whatever you want (example: qwen2.5-coder-extra-ctx:7b)]
```

Now you have a new Ollama model that isn't heavily limited in the context length like Ollama models are by default for some reason.
You'll see this new model in the list of Ollama models along with all the others you pulled!

## Adding New LLMs:

To make new LLMs available to use in this version of Bolt.new, head on over to `app/utils/constants.ts` and find the constant MODEL_LIST. Each element in this array is an object that has the model ID for the name (get this from the provider's API documentation), a label for the frontend model dropdown, and the provider. 

By default, Anthropic, OpenAI, Groq, and Ollama are implemented as providers, but the YouTube video for this repo covers how to extend this to work with more providers if you wish!

When you add a new model to the MODEL_LIST array, it will immediately be available to use when you run the app locally or reload it. For Ollama models, make sure you have the model installed already before trying to use it here!

## Available Scripts

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the project.
- `pnpm run start`: Runs the built application locally using Wrangler Pages. This script uses `bindings.sh` to set up necessary bindings so you don't have to duplicate environment variables.
- `pnpm run preview`: Builds the project and then starts it locally, useful for testing the production build. Note, HTTP streaming currently doesn't work as expected with `wrangler pages dev`.
- `pnpm test`: Runs the test suite using Vitest.
- `pnpm run typecheck`: Runs TypeScript type checking.
- `pnpm run typegen`: Generates TypeScript types using Wrangler.
- `pnpm run deploy`: Builds the project and deploys it to Cloudflare Pages.

## Development

To start the development server:

```bash
pnpm run dev
```

This will start the Remix Vite development server. You will need Google Chrome Canary to run this locally if you use Chrome! It's an easy install and a good browser for web development anyway.

## Mobile Application

Currently, Bolt.new does not have a dedicated mobile application. However, there are plans to develop a mobile app to enhance accessibility and usability on mobile devices. The mobile app will aim to provide a seamless experience similar to the desktop version, allowing users to prompt, run, edit, and deploy applications directly from their mobile devices. Stay tuned for updates on the development progress and release timeline.

## Tips and Tricks

Here are some tips to get the most out of Bolt.new:

- **Be specific about your stack**: If you want to use specific frameworks or libraries (like Astro, Tailwind, ShadCN, or any other popular JavaScript framework), mention them in your initial prompt to ensure Bolt scaffolds the project accordingly.

- **Use the enhance prompt icon**: Before sending your prompt, try clicking the 'enhance' icon to have the AI model help you refine your prompt, then edit the results before submitting.

- **Scaffold the basics first, then add features**: Make sure the basic structure of your application is in place before diving into more advanced functionality. This helps Bolt understand the foundation of your project and ensure everything is wired up right before building out more advanced functionality.

- **Batch simple instructions**: Save time by combining simple instructions into one message. For example, you can ask Bolt to change the color scheme, add mobile responsiveness, and restart the dev server, all in one go saving you time and reducing API credit consumption significantly.
