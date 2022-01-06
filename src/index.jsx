import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/App';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={{}}>
			<Home />
			<GlobalStyles />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
