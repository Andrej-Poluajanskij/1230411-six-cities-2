import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app';
import offers from './mocks/offers';
import {reducer} from './reducer';

const init = (myOffers) => {
  const store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
      <App offers={myOffers}/>
    </Provider>, 
      document.querySelector(`#root`)
  );
};
init(offers);
