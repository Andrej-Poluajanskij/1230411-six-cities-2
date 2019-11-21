import React from 'react';
import render from 'react-test-renderer';
import Map from './city-map';

import offers from '../../mocks/offers';
import util from '../../util';

it(`CityMap correctly renders after relaunch`, () => {
  util();

  const tree = render
  .create(<Map
    mapMarks={offers}
  />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


