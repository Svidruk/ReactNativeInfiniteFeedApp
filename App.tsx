import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#6345ba" />
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
