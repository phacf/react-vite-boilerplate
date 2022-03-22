import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import App from './App';

import { ErrorBoundary } from './utils/ErrorHandler';


ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
);
