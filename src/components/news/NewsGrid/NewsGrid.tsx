import type { NewsArticle } from '@/types/newsArticle';
import { NewsCard } from '@/components/news/NewsCard/NewsCard';
import './NewsGrid.scss';

interface NewsGridProps {
  articles: NewsArticle[];
}

export function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className="news-grid">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
