import React from 'react';
import render from 'react-test-renderer';
import PlaceCard from './place-card';

it(`PlaceCard correctly renders after relaunch`, () => {
  const tree = render
    .create(<PlaceCard
      mouseEnter={jest.fn()}
      mouseLeave={jest.fn()}
      id={{}}
      clickHandler={jest.fn()}
      placeImage={`img/apartment-02.jpg`}
      placePrice={`132€`}
      placeDescrioption={`Canal View Prinsengracht`}
      placeType={`Apartment`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
