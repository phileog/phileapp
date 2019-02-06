import 'react-app-polyfill/ie11';
import 'babel-polyfill';
import './lib/polyfills';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {
  CssBaseline,
  MuiThemeProvider,
  getTheme,
  getFontFamily,
} from './lib/theme';
import { ApolloProvider, getApolloClient } from './lib/apollo';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './styles/index.scss';

// Material-UI
const muiTheme = getTheme();
const fontFamily = getFontFamily();

// Apollo
const apolloClient = getApolloClient();

const Bootstrap = () => (
  <>
    <CssBaseline />
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <App fontFamily={fontFamily} />
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  </>
);

render(<Bootstrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
