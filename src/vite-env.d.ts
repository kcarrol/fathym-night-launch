/// <reference types="vite/client" />

interface HubSpotForms {
  create: (config: {
    portalId: string;
    formId: string;
    region: string;
    target?: string;
  }) => void;
}

declare global {
  interface Window {
    hbspt?: {
      forms: HubSpotForms;
    };
  }
}

export {};
