/// <reference types="@emotion/jest" />
// the above is just convenience, this way it's "automatic" as it's also in jest setup

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.gif" {
  const content: string;
  export default content;
}
declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "@tablecheck/scripts" {
  // this file is autobuilt inside configureTypescript, all changes here will be overwritten
  export interface Config {
    isDevelopment: boolean;
    logLevel: string;
    publicUri: string;
    baseName: string;
    cdnURL: string;
    formSpreeId: string;
  }

  global {
    const CONFIG: Config;
  }
}
