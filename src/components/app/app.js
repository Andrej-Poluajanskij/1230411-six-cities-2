import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const {offers} = props;

  return (
    <WelcomeScreen offers={offers} clickHandler={()=>{}}/>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
