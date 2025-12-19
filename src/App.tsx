import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));

// Loading Component
const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#004445] via-[#005f60] to-[#004445]">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-[#f8b400]/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#f8b400] rounded-full animate-spin"></div>
          <div className="absolute inset-3 border-4 border-transparent border-t-white/50 rounded-full animate-spin" style={{ animationDuration: '1s', animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">LB Interiors</h2>
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-[#f8b400] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#f8b400] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#f8b400] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Layout component
const Layout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        handle: { title: 'Best Interior Designers in Gorakhpur | LB Interiors' },
      },
      {
        path: '/about',
        element: <About />,
        handle: { title: 'About LB Interiors | Luxury Interior Designers in Gorakhpur' },
      },
      {
        path: '/services',
        element: <Services />,
        handle: { title: 'Interior Design Services in Gorakhpur | LB Interiors' },
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
        handle: { title: 'Interior Design Portfolio | LB Interiors Gorakhpur' },
      },
      {
        path: '/contact',
        element: <Contact />,
        handle: { title: 'Contact LB Interiors | Best Interior Designers in Gorakhpur' },
      },
      {
        path: '/blog',
        element: <Blog />,
        handle: { title: 'Interior Design Blog | LB Interiors' },
      },
      {
        path: '/blog/:slug',
        element: <BlogDetail />,
        handle: { title: 'Interior Design Blog Post | LB Interiors' },
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    const handleRouteChange = () => {
      const currentRoute = router.state.matches.find((match) => match.handle?.title);
      document.title = currentRoute?.handle?.title || 'LB Interiors';
    };

    const unsubscribe = router.subscribe(handleRouteChange);
    handleRouteChange();

    return () => unsubscribe();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;