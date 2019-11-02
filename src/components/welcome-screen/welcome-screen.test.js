import React from 'react';
import render from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = render
    .create(<WelcomeScreen
      offers={[`Beautiful & luxurious apartment at great location`]}
      clickHandler={jest.fn()}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
