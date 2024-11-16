ARG BASE=node:20.18.0
FROM ${BASE} AS base

WORKDIR /app

# Install dependencies (this step is cached as long as the dependencies don't change)
COPY package.json pnpm-lock.yaml ./

RUN corepack enable pnpm && pnpm install && \
    npm install -g @capacitor/cli && \
    apt-get update && apt-get install -y openjdk-11-jdk && \
    wget -q https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip -O android_cmd_tools.zip && \
    mkdir -p /usr/local/android-sdk/cmdline-tools && \
    unzip android_cmd_tools.zip -d /usr/local/android-sdk/cmdline-tools && \
    rm android_cmd_tools.zip && \
    yes | /usr/local/android-sdk/cmdline-tools/cmdline-tools/bin/sdkmanager --sdk_root=/usr/local/android-sdk "platform-tools" "platforms;android-30" "build-tools;30.0.3"

# Copy the rest of your app's source code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Production image
FROM base AS bolt-ai-production

# Define environment variables with default values or let them be overridden
ARG GROQ_API_KEY
ARG OPENAI_API_KEY
ARG ANTHROPIC_API_KEY
ARG OPEN_ROUTER_API_KEY
ARG GOOGLE_GENERATIVE_AI_API_KEY
ARG OLLAMA_API_BASE_URL
ARG VITE_LOG_LEVEL=debug

ENV WRANGLER_SEND_METRICS=false \
    GROQ_API_KEY=${GROQ_API_KEY} \
    OPENAI_API_KEY=${OPENAI_API_KEY} \
    ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY} \
    OPEN_ROUTER_API_KEY=${OPEN_ROUTER_API_KEY} \
    GOOGLE_GENERATIVE_AI_API_KEY=${GOOGLE_GENERATIVE_AI_API_KEY} \
    OLLAMA_API_BASE_URL=${OLLAMA_API_BASE_URL} \
    VITE_LOG_LEVEL=${VITE_LOG_LEVEL}

# Pre-configure wrangler to disable metrics
RUN mkdir -p /root/.config/.wrangler && \
    echo '{"enabled":false}' > /root/.config/.wrangler/metrics.json

RUN npm run build

CMD [ "pnpm", "run", "dockerstart"]

# Development image
FROM base AS bolt-ai-development

# Define the same environment variables for development
ARG GROQ_API_KEY
ARG OPENAI_API_KEY
ARG ANTHROPIC_API_KEY
ARG OPEN_ROUTER_API_KEY
ARG GOOGLE_GENERATIVE_AI_API_KEY
ARG OLLAMA_API_BASE_URL
ARG VITE_LOG_LEVEL=debug

ENV GROQ_API_KEY=${GROQ_API_KEY} \
    OPENAI_API_KEY=${OPENAI_API_KEY} \
    ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY} \
    OPEN_ROUTER_API_KEY=${OPEN_ROUTER_API_KEY} \
    GOOGLE_GENERATIVE_AI_API_KEY=${GOOGLE_GENERATIVE_AI_API_KEY} \
    OLLAMA_API_BASE_URL=${OLLAMA_API_BASE_URL} \
    VITE_LOG_LEVEL=${VITE_LOG_LEVEL}

RUN mkdir -p ${WORKDIR}/run
CMD pnpm run dev --host
