import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

it(`WelcomeScreen is correctly rendered after e2e test`, () => {
  const clickTest = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    offers={[`Beautiful & luxurious apartment at great location`]}
    clickHandler={clickTest}
  />);

  const chooseApartment = welcomeScreen.find(`.place-card__descriptions`);
  chooseApartment.simulate(`click`);

  expect(clickTest).toHaveBeenCalledTimes(1);
});
