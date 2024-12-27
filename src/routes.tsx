import React from 'react';
import { useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Conversation = React.lazy(() => import('./pages/Conversation'));

function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Home />
        </React.Suspense>
      ),
    },
    {
      path: '/conversation',
      element: (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Conversation />
        </React.Suspense>
      ),
    },
    // {
    //   path: "*",
    //   element: (
    //     <React.Suspense fallback={<div>Loading...</div>}>
    //       <NotFound />
    //     </React.Suspense>
    //   ),
    // },
  ]);

  return routes;
}

export default Routes;
