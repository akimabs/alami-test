import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import StackNav from './routes/stack-nav';
import {persistor, store} from './store/store';

StatusBar.setBackgroundColor('transparent');
StatusBar.setTranslucent(true);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StackNav />
      </PersistGate>
    </Provider>
  );
}

export default App;
