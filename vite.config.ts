import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/portfolio-3.0/',
    plugins: [react()],
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
      'import.meta.env.VITE_SUPABASE_KEY': JSON.stringify(env.VITE_SUPABASE_KEY),
      'import.meta.env.VITE_EMAIL_SERVICE_ID': JSON.stringify(env.VITE_EMAIL_SERVICE_ID),
      'import.meta.env.VITE_EMAIL_TEMPLATE_ID': JSON.stringify(env.VITE_EMAIL_TEMPLATE_ID),
      'import.meta.env.VITE_EMAIL_TEMPLATE_PARAMS': JSON.stringify(env.VITE_EMAIL_TEMPLATE_PARAMS),
    },
  };
});