import * as plugins from './smartmanifest.plugins';

export interface ISmartManifestConstructorOptions {
  name: string;
  short_name: string;
  start_url?: '/';
  display?: string;
  orientation?: string;
  background_color?: string;
  theme_color?: string;
  icons?: [
    {
      src: string;
      type: string;
      sizes: string;
    }
  ];
}

const defaultConstructorOptions: ISmartManifestConstructorOptions = {
  name: 'UNNAMED APP',
  short_name: 'UNNAMED',
  start_url: '/',
  display: 'standalone',
  orientation: 'any',
  background_color: '#fff',
  theme_color: '#f78f21',
  icons: [
    {
      src: '/assets/icon-large.png',
      type: 'image/png',
      sizes: '1024x1024',
    }
  ]
}

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
