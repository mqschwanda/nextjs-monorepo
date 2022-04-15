import { useTranslation } from 'react-i18next';
import { demoConfig } from '@/features/Demo/config';

export const usePageTranslation = () => {
  return useTranslation(demoConfig.i18nNamespaces);
};
