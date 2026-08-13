import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lakzee32.app',
  appName: 'Lakzee 32',
  webDir: 'out',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  }
};

export default config;
