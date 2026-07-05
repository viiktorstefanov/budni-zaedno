import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { NewsGrid } from '@/components/news/NewsGrid/NewsGrid';
import { news } from '@/data/news';
import { useTranslation } from '@/i18n/useTranslation';
import './NewsPage.scss';

export function NewsPage() {
  const t = useTranslation();

  return (
    <div className="news-page">
      <div className="container">
        <SectionHeading eyebrow={t.news.eyebrow} title={t.news.title} subtitle={t.news.subtitle} />
        <NewsGrid articles={news} />
      </div>
    </div>
  );
}
