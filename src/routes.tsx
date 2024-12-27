import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { ErrorBoundary } from "./components"

const Home = React.lazy(() => import('./pages/Home'));
const Conversation = React.lazy(() => import('./pages/Conversation'));

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
        { path: "/", element: <React.Suspense fallback={<div>Loading...</div>}><Home /></React.Suspense> },
        { path: "/conversation", element: <React.Suspense fallback={<div>Loading...</div>}><Conversation /></React.Suspense> },
        { path: "/*", element: <React.Suspense fallback={<div>Loading...</div>}><div>not found</div></React.Suspense> },

      ],
    },
  ]);

  return routes;
}

export default Routes;
