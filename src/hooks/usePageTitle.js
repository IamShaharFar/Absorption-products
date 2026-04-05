import { useEffect } from 'react';
import { useLanguage } from '../i18n';

export function usePageTitle(productName) {
  const { t } = useLanguage();
  useEffect(() => {
    if (productName) {
      document.title = t('site.product_title').replace('{productName}', productName);
    } else {
      document.title = t('site.home_title');
    }
  }, [productName, t]);
}
