import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { ErrorBoundary } from './components';
import { LoadingScreen } from './pages';

const Home = React.lazy(() => import('./pages/Home'));
const Chat = React.lazy(() => import('./pages/Chat'));

function SharedErrorBoundaryWrapper() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}

function Routes() {
  const routes = useRoutes([
    {
      element: <SharedErrorBoundaryWrapper />,
      children: [
        {
          path: '/',
          element: (
            <React.Suspense fallback={<LoadingScreen />}>
              <Home />
            </React.Suspense>
          ),
        },
        {
          path: '/conversation',
          element: (
            <React.Suspense fallback={<LoadingScreen />}>
              <Chat />
            </React.Suspense>
          ),
        },
        {
          path: '/*',
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <div>not found</div>
            </React.Suspense>
          ),
        },
      ],
    },
  ]);

  return routes;
}

export default Routes;
