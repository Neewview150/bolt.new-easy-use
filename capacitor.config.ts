// capacitor.config.ts

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.boltnew',
  appName: 'BoltNew',
  webDir: 'build/client',
  server: {
    // Uncomment the following line to enable live reload during development
    // url: 'http://localhost:3000',
    cleartext: true
  }
};

export default config;
