import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import { BrowserRouter as Router } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

Sentry.init({
	environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
	dsn: process.env.REACT_APP_SENTRY_DSN,
	integrations: [new BrowserTracing()],
  
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 0.1,
});

const queryClient = new QueryClient({
	staleTime: 0,
	cacheTime: 0
});

function initializeApp() {
	ReactDOM.render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<Router>
					<App />
				</Router>
			</QueryClientProvider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

initializeApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
