import React, { useEffect } from 'react';
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
  useErrorBoundary,
} from 'react-error-boundary';

// NOTE
// We could also add Sentry to log errors to our dashboard. It helps in catching errors in production that are not reproducible in development.

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  const { resetBoundary, showBoundary } = useErrorBoundary();

  useEffect(() => {
    // Catch unhandled errors and promise rejections to still utilize the error boundary for the error page
    const errorHandler = (event: ErrorEvent) => {
      console.error('Unhandled error:', event.error);
      showBoundary(event.error);
    };

    const promiseRejectionHandler = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      showBoundary(event.reason);
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', promiseRejectionHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', promiseRejectionHandler);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>
      <p className="text-gray-600 mb-6 max-w-lg">{error.message}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        onClick={resetBoundary}
      >
        Try Again
      </button>
    </div>
  );
};

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};
