import React from 'react';

import WelcomeScreen from '../welcome-screen/welcome-screen';
const descriptions = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

const App = () => {
  return (
    <WelcomeScreen offers={descriptions} />
  );
};

export default App;
