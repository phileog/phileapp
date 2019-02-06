import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';

import AppWrapper from './components/structure/AppWrapper';
import ContentWrapper from './components/structure/ContentWrapper';

import Home from './components/Home';

// import './App.scss';

class App extends PureComponent {
  static propTypes = {
    fontFamily: PropTypes.string,
    // Router
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    fontFamily: 'Roboto, Arial, sans-serif',
  };

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
    } = this.props;
    const {
      location: { pathname: prevPathname },
    } = prevProps;
    if (prevPathname !== pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  render() {
    const { fontFamily } = this.props;
    return (
      <AppWrapper style={{ fontFamily }}>
        <ContentWrapper>
          <Switch>
            <Route component={Home} />
          </Switch>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default withRouter(App);
