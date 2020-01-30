import * as plugins from './smartmanifest.plugins';

export interface ISmartManifestConstructorOptions {
  name: string;
  short_name: string;
  start_url?: '/';
  display?: string;
  orientation?: string;
  background_color?: string;
  theme_color?: string;
  icons?: Array<{
    src: string;
    type: string;
    sizes: string;
  }>;
  related_applications?: Array<{
    platform: 'play' | string;
    id: string;
  }>;
}

const defaultConstructorOptions: ISmartManifestConstructorOptions = {
  name: 'UNNAMED APP',
  short_name: 'UNNAMED',
  start_url: '/',
  display: 'standalone',
  orientation: 'any',
  background_color: '#000000',
  theme_color: '#000000',
  icons: [
    {
      src: '/assetbroker/manifest/icon-large.png',
      type: 'image/png',
      sizes: '1024x1024'
    },
    {
      src: '/assetbroker/manifest/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png'
    },
    {
      src: '/assetbroker/manifest/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    }
  ],
  related_applications: []
};

export class SmartManifest {
  public options: ISmartManifestConstructorOptions;
  constructor(optionsArg: ISmartManifestConstructorOptions) {
    this.options = {
      ...defaultConstructorOptions,
      ...optionsArg
    };
  }

  public jsonString(): string {
    return JSON.stringify(this.options);
  }

  /**
   * get the manifest data as javascriptObject
   */
  public getData() {
    return JSON.parse(JSON.stringify(this.options));
  }
}
