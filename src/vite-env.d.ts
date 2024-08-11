/// <reference types="vite/client" />
declare namespace NodeJS {
    interface ProcessEnv {
        VITE_SUPABASE_URL: string;
        VITE_SUPABASE_KEY: string;
        VITE_EMAIL_SERVICE_ID: string,
        VITE_EMAIL_TEMPLATE_ID: string,
        VITE_EMAIL_TEMPLATE_PARAMS: string
    }
}