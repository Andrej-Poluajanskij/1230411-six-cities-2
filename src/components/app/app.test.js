import React from 'react';
import render from 'react-test-renderer';
import App from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = render
    .create(<App
      offers={[`Beautiful & luxurious apartment at great location`]}
      clickHandler={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
