import { Link } from 'react-router-dom';
import type { NewsArticle } from '@/types/newsArticle';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder/ImagePlaceholder';
import { useLanguage } from '@/context/LanguageContext';
import { LOCALE_MAP } from '@/types/language';
import './NewsCard.scss';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  const { language } = useLanguage();
  const dateFormatter = new Intl.DateTimeFormat(LOCALE_MAP[language], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    numberingSystem: 'latn',
  });

  return (
    <Link to={`/news/${article.id}`} className="news-card">
      <ImagePlaceholder label={article.title[language]} />
      <div className="news-card__body">
        <div className="news-card__meta">
          <span className="news-card__category">{article.category[language]}</span>
          <span className="news-card__date">{dateFormatter.format(new Date(article.publishedDate))}</span>
        </div>
        <h3 className="news-card__title">{article.title[language]}</h3>
        <p className="news-card__excerpt">{article.excerpt[language]}</p>
      </div>
    </Link>
  );
}
