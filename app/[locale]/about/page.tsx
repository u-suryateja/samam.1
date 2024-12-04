import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
 
export default function AboutPage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('footer')}</h1>
      <Link href="/">{t('intro')}</Link>
    </div>
  );
}