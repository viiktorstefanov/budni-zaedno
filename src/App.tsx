import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/common/ScrollToTop/ScrollToTop';
import { Layout } from '@/components/layout/Layout/Layout';
import { HomePage } from '@/pages/HomePage/HomePage';
import { AboutPage } from '@/pages/AboutPage/AboutPage';
import { CausesPage } from '@/pages/CausesPage/CausesPage';
import { CauseDetailPage } from '@/pages/CauseDetailPage/CauseDetailPage';
import { ActivitiesPage } from '@/pages/ActivitiesPage/ActivitiesPage';
import { NewsPage } from '@/pages/NewsPage/NewsPage';
import { NewsDetailPage } from '@/pages/NewsDetailPage/NewsDetailPage';
import { ContactsPage } from '@/pages/ContactsPage/ContactsPage';
import { DonatePage } from '@/pages/DonatePage/DonatePage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="causes" element={<CausesPage />} />
          <Route path="causes/:causeId" element={<CauseDetailPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:articleId" element={<NewsDetailPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
