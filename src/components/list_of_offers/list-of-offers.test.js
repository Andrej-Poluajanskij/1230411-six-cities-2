import React from 'react';
import render from 'react-test-renderer';
import ListOfOffers from './list-of-offers';

import offers from '../../mocks/offers';

it(`ListOfOffers correctly renders after relaunch`, () => {
  const tree = render
    .create(<ListOfOffers
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
