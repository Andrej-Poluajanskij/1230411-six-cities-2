import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import offers from './mocks/offers';


const init = (myOffers) => {
  ReactDOM.render(
      <App offers={myOffers}/>,
      document.querySelector(`#root`)
  );
};
init(offers);
