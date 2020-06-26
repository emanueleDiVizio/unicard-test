import {Provider} from 'react-redux';
import store from './config/store';
import React from 'react';
import MainScreen from './screens/MainScreen';

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
