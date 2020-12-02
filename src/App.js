import React from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {I18nextProvider} from 'react-i18next';

import i18n from '~/locale/i18n';
import AppNavigation from './routes';
import store, {persistor} from './store';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
