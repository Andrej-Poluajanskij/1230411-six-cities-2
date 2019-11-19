import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

Enzyme.configure({adapter: new Adapter()});

it(`PlaceCard is correctly rendered after e2e test`, () =>{
  const onMauseTest = jest.fn();
  const placeCard = shallow(<PlaceCard
    mouseEnter={onMauseTest}
    mouseLeave={onMauseTest}
    id={{}}
    clickHandler={onMauseTest}
    placeImage={`img/apartment-02.jpg`}
    placePrice={`132€`}
    placeDescrioption={`Canal View Prinsengracht`}
    placeType={`Apartment`}
  />);

  const chooseApartment = placeCard.find(`.place-card__descriptions`);
  chooseApartment.simulate(`click`);

  const hoverCard = placeCard.find(`.cities__place-card`);
  hoverCard.simulate(`onmouseenter`, {mouseEnter: ()=>{}});

  const hoverCardOff = placeCard.find(`.cities__place-card`);
  hoverCardOff.simulate(`onmouseleave`, {mouseLeave: ()=>{}});

  expect(onMauseTest).toHaveBeenCalledTimes(1);
  expect(onMauseTest).toHaveBeenCalledWith();

});
