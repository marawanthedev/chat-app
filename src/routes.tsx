import React from 'react';
import { Outlet, useLocation, useRoutes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ErrorBoundary } from './components';
import { LoadingScreen } from './pages';
import './transitions.css';
import NotFoundPage from './pages/NotFound';

const Home = React.lazy(() => import('./pages/Home'));
const Chat = React.lazy(() => import('./pages/Chat'));

function SharedErrorBoundaryWrapper() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

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
            <React.Suspense fallback={<LoadingScreen />}>
              <NotFoundPage />
            </React.Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <div>{routes}</div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function Routes() {
  return <AnimatedRoutes />;
}

export default Routes;
