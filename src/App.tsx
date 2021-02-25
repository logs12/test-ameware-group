import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import routes from '@/routes';
import history from '@/history';
import HomePage from '@/pages/HomePage';
import { store } from '@/store';

const engine = new Styletron();

const Application = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Router>
              <Switch>
                <Route path={routes.root}>
                  <HomePage />
                </Route>
              </Switch>
            </Router>
          </ConnectedRouter>
        </Provider>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default Application;
