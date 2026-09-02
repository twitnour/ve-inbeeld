/// <reference types="vite/client" />

/**
 * Augments Vite's built-in ImportMetaEnv with the VITE_-prefixed keys
 * this project actually defines in .env (see that file for what each
 * one means). Read them through src/lib/businessInfo.ts rather than
 * import.meta.env directly — see that file's doc comment for why.
 */
interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_PHONE_NUMBER: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_KVK_NUMBER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
