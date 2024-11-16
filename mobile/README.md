# Bolt.new Mobile Application

This directory contains all the files related to the development of the Bolt.new mobile application. The mobile app aims to extend the capabilities of the Bolt.new platform to mobile devices, providing users with the ability to prompt, run, edit, and deploy full-stack applications directly from their smartphones.

## Project Structure

- **App.tsx**: The entry point for the mobile application. This file contains the basic setup for the React Native app.
- **components/**: This directory will contain reusable components used throughout the mobile application.
- **screens/**: This directory will contain the different screens or views of the mobile application.
- **assets/**: This directory will store images, fonts, and other static assets used in the app.
- **utils/**: This directory will contain utility functions and helpers used across the app.

## Setup Instructions

To get started with the mobile application development, follow these steps:

1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

2. **Install React Native CLI**: Run the following command to install the React Native CLI globally:
   ```bash
   npm install -g react-native-cli
   ```

3. **Install Dependencies**: Navigate to the 'mobile' directory and run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

4. **Run the Application**: Use the following command to start the mobile application on an Android or iOS emulator:
   ```bash
   npx react-native run-android
   ```
   or
   ```bash
   npx react-native run-ios
   ```

## Development Tools

- **React Native**: A framework for building native apps using React.
- **React Native CLI**: A command-line interface for React Native.
- **Android Studio/Xcode**: Required for running the app on Android/iOS emulators.

## Notes

- Ensure your development environment is set up correctly for React Native. Follow the official [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide for detailed instructions.
- This README will be updated as the project evolves and more files and directories are added.
