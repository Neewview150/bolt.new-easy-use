# Android Environment Setup Guide

This guide provides detailed instructions on setting up the Android environment for building and testing the Bolt.new APK. Follow these steps to ensure a smooth setup and testing process.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio](https://developer.android.com/studio)

## Installing Android Studio

1. **Download Android Studio**: Visit the [Android Studio download page](https://developer.android.com/studio) and download the installer for your operating system.

2. **Install Android Studio**:
   - Run the downloaded installer.
   - Follow the on-screen instructions to complete the installation.
   - During installation, ensure that the Android SDK, Android SDK Platform, and Android Virtual Device are selected.

3. **Configure Android Studio**:
   - Open Android Studio.
   - Go to `Configure` > `SDK Manager`.
   - Ensure you have the latest SDK tools and platforms installed.

## Setting Up an Emulator

1. **Open AVD Manager**:
   - In Android Studio, go to `Tools` > `AVD Manager`.

2. **Create a New Virtual Device**:
   - Click on `Create Virtual Device`.
   - Select a hardware profile (e.g., Pixel 3) and click `Next`.
   - Choose a system image (e.g., Android 11.0) and click `Next`.
   - Verify the configuration and click `Finish`.

3. **Start the Emulator**:
   - In the AVD Manager, click the `Play` button next to your virtual device to start the emulator.

## Building the APK

1. **Navigate to the Project Directory**:
   - Open a terminal and navigate to the root directory of the Bolt.new project.

2. **Build the APK**:
   - Run the following command to build the APK:
     ```bash
     pnpm run build:apk
     ```
   - This command uses Capacitor to build the APK. Ensure that Capacitor is properly configured in your project.

## Running the APK on a Device

1. **Transfer the APK to Your Device**:
   - Connect your Android device to your computer via USB.
   - Enable `USB Debugging` on your device (found in `Developer Options`).
   - Transfer the APK file from `android/app/build/outputs/apk/debug` to your device.

2. **Install the APK**:
   - On your device, locate the transferred APK file.
   - Tap on the APK file to install it.
   - Follow any on-screen instructions to complete the installation.

## Troubleshooting

- **Emulator Issues**: If the emulator fails to start, ensure that your system meets the hardware requirements and that virtualization is enabled in your BIOS settings.
- **APK Installation Errors**: Ensure that `Unknown Sources` is enabled in your device settings to allow installation from sources other than the Play Store.

For further assistance, refer to the [Android Studio documentation](https://developer.android.com/studio/intro) or seek help from the community.
