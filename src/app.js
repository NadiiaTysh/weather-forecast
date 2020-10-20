//Core
import React from 'react';
import { Provider } from 'react-redux';

//Store
import { store } from './source/init/store';

import { Source } from './source/index';

export const App = () => {

  
  return (
    <Provider store = {store}>
      <Source/>
    </Provider>
  )
};