# Contributing to Bolt.new Fork

First off, thank you for considering contributing to Bolt.new! This fork aims to expand the capabilities of the original project by integrating multiple LLM providers and enhancing functionality. Every contribution helps make Bolt.new a better tool for developers worldwide.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Coding Standards](#coding-standards)
- [Development Setup](#development-setup)
- [Deploymnt with Docker](#docker-deployment-documentation)
- [Project Structure](#project-structure)
- [Integrating New AI Models and Providers](#integrating-new-ai-models-and-providers)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### 🐞 Reporting Bugs and Feature Requests
- Check the issue tracker to avoid duplicates
- Use the issue templates when available
- Include as much relevant information as possible
- For bugs, add steps to reproduce the issue

### 🔧 Code Contributions
1. Fork the repository
2. Create a new branch for your feature/fix
3. Write your code
4. Submit a pull request

### ✨ Becoming a Core Contributor
We're looking for dedicated contributors to help maintain and grow this project. If you're interested in becoming a core contributor, please fill out our [Contributor Application Form](https://forms.gle/TBSteXSDCtBDwr5m7).

## Pull Request Guidelines

### 📝 PR Checklist
- [ ] Branch from the main branch
- [ ] Update documentation if needed
- [ ] Manually verify all new functionality works as expected
- [ ] Keep PRs focused and atomic

### 👀 Review Process
1. Manually test the changes
2. At least one maintainer review required
3. Address all review comments
4. Maintain clean commit history

## Coding Standards

### 💻 General Guidelines
- Follow existing code style
- Comment complex logic
- Keep functions focused and small
- Use meaningful variable names

## Integrating New AI Models and Providers

### Adding New Models to the MODEL_LIST
1. Open the `app/utils/constants.ts` file.
2. Locate the `MODEL_LIST` array.
3. Add a new entry for your model with the following structure:
   ```typescript
   {
     name: 'model-id',
     label: 'Model Label',
     provider: 'Provider Name'
   }
   ```
4. Ensure the model ID and provider name match those used by the provider's API.

### Updating API Handling Logic
1. Open the relevant API route file, such as `app/routes/api.chat.ts`.
2. Ensure that the API keys for the new provider are correctly parsed and included in requests.
3. Update any logic that handles provider-specific configurations or endpoints.

### Testing the Integration
1. Verify that the new model appears in the UI and can be selected.
2. Test sending requests to the new model and ensure responses are handled correctly.
3. Check for any errors or issues in the console and address them as needed.

## Quick Setup Guide

Follow these steps to get Bolt.new running locally:

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

These steps will get you up and running with Bolt.new quickly. For more detailed instructions, refer to the sections below.

## Testing

Run the test suite with:

```bash
pnpm test
```

## Deployment

To deploy the application to Cloudflare Pages:

```bash
pnpm run deploy
```

Make sure you have the necessary permissions and Wrangler is correctly configured for your Cloudflare account.

# Docker Deployment Documentation

This guide outlines various methods for building and deploying the application using Docker.

## Build Methods

### 1. Using Helper Scripts

NPM scripts are provided for convenient building:

```bash
# Development build
npm run dockerbuild

# Production build
npm run dockerbuild:prod
```

### 2. Direct Docker Build Commands

You can use Docker's target feature to specify the build environment:

```bash
# Development build
docker build . --target bolt-ai-development

# Production build
docker build . --target bolt-ai-production
```

### 3. Docker Compose with Profiles

Use Docker Compose profiles to manage different environments:

```bash
# Development environment
docker-compose --profile development up

# Production environment
docker-compose --profile production up
```

## Running the Application

After building using any of the methods above, run the container with:

```bash
# Development
docker run -p 5173:5173 --env-file .env.local bolt-ai:development

# Production
docker run -p 5173:5173 --env-file .env.local bolt-ai:production
```

## Deployment with Coolify

[Coolify](https://github.com/coollabsio/coolify) provides a straightforward deployment process:

1. Import your Git repository as a new project
2. Select your target environment (development/production)
3. Choose "Docker Compose" as the Build Pack
4. Configure deployment domains
5. Set the custom start command:
   ```bash
   docker compose --profile production up
   ```
6. Configure environment variables
   - Add necessary AI API keys
   - Adjust other environment variables as needed
7. Deploy the application

## VS Code Integration

The `docker-compose.yaml` configuration is compatible with VS Code dev containers:

1. Open the command palette in VS Code
2. Select the dev container configuration
3. Choose the "development" profile from the context menu

## Environment Files

Ensure you have the appropriate `.env.local` file configured before running the containers. This file should contain:
- API keys
- Environment-specific configurations
- Other required environment variables

## Notes

- Port 5173 is exposed and mapped for both development and production environments
- Environment variables are loaded from `.env.local`
- Different profiles (development/production) can be used for different deployment scenarios
- The configuration supports both local development and production deployment
