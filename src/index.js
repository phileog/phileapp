import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import { apolloClient } from './lib/apollo';
import { MuiThemeProvider, getTheme, CssBaseline } from './lib/Theme';

import App from './App';

import * as serviceWorker from './serviceWorker';

// Material-UI
const muiTheme = getTheme();

const Bootstrap = () => (
  <>
    <CssBaseline />
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <App />
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
