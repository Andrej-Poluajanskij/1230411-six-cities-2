import React from 'react';
import render from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

import offers from '../../mocks/offers';
import util from '../../util';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  util();
  const tree = render
    .create(<WelcomeScreen
      offers={offers}
      clickHandler={jest.fn()}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
