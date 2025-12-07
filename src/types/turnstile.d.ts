// Type definitions for Cloudflare Turnstile
interface TurnstileWidget {
    reset: () => void;
    getResponse: () => string;
}

interface Turnstile {
    render: (container: HTMLElement | string, options: TurnstileOptions) => string;
    reset: (widgetId: string) => void;
    remove: (widgetId: string) => void;
    getResponse: (widgetId?: string) => string;
}

interface TurnstileOptions {
    sitekey: string;
    theme?: 'light' | 'dark' | 'auto';
    size?: 'normal' | 'compact';
    tabindex?: number;
    callback: (token: string) => void;
    errorCallback?: () => void;
    expiredCallback?: () => void;
    beforeInteractiveCallback?: () => void;
    afterInteractiveCallback?: () => void;
    challengeExpiredCallback?: () => void;
    'refresh-expired'?: 'auto' | 'manual';
    appearance?: 'always' | 'interaction-only' | 'never';
    action?: string;
    cData?: string;
}

declare global {
    interface Window {
        turnstile: Turnstile;
    }
}

export {};