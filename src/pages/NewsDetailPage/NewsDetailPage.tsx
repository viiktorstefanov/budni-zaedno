import { Link, Navigate, useParams } from 'react-router-dom';
import { news } from '@/data/news';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder/ImagePlaceholder';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import { LOCALE_MAP } from '@/types/language';
import './NewsDetailPage.scss';

export function NewsDetailPage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = news.find((item) => item.id === articleId);
  const { language } = useLanguage();
  const t = useTranslation();

  const dateFormatter = new Intl.DateTimeFormat(LOCALE_MAP[language], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    numberingSystem: 'latn',
  });

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <article className="news-detail">
      <div className="container news-detail__inner">
        <Link to="/news" className="news-detail__back">
          {t.common.backArrow} {t.newsDetail.backLink}
        </Link>

        <div className="news-detail__meta">
          <span className="news-detail__category">{article.category[language]}</span>
          <span className="news-detail__date">{dateFormatter.format(new Date(article.publishedDate))}</span>
        </div>

        <h1 className="news-detail__title">{article.title[language]}</h1>
        <p className="news-detail__author">
          {t.newsDetail.byAuthor} {article.author[language]}
        </p>

        <ImagePlaceholder label={article.title[language]} />

        <div className="news-detail__body">
          {article.body[language].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
