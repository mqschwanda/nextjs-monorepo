import type { I18nActiveNamespaces } from '@/lib/i18n';

export type SystemConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'system'>>;
};

<<<<<<< HEAD:apps/nextjs-app/src/features/system/system.config.ts
export const systemConfig: SystemConfig = {
  i18nNamespaces: ['system'],
=======
export const errorConfig: ErrorConfig = {
  i18nNamespaces: ['common', 'system'],
>>>>>>> e3344c5a (refactor(pages): cleanup pages):apps/nextjs-app/src/features/system/config.ts
} as const;
