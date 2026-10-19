import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { pagesConfig } from './pages.config';

/**
 * This used to be wrapped in Base44's AuthProvider, which blocked the whole
 * site behind an auth check: every visitor waited on a spinner while the SDK
 * asked Base44 who they were, and a failure redirected them to a Base44 login
 * page. That is wrong for a public marketing site — nobody signs in to read
 * about a company — and it was the single biggest reason the site could not
 * run without Base44.
 */
const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = Pages[mainPageKey];

function LayoutWrapper({
  children,
  currentPageName,
}: {
  children: React.ReactNode;
  currentPageName: string;
}) {
  return Layout ? <Layout currentPageName={currentPageName}>{children}</Layout> : <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          }
        />
        {Object.entries(Pages).map(([path, Page]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={
              <LayoutWrapper currentPageName={path}>
                <Page />
              </LayoutWrapper>
            }
          />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
