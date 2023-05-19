import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { store } from './Store/store';
import App from './App';
import ErrorBoundary from './ErrorLogger/ErrorLogger';

// react-query client
const queryClient = new QueryClient();

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
