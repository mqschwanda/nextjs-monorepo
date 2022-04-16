import { useTranslation } from 'react-i18next';
import { systemConfig } from '@/features/system/config';

export const usePageTranslation = () => {
  return useTranslation(systemConfig.i18nNamespaces);
};
