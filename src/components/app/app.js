import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const {offers} = props;
  console.log(offers)
  return (
    <WelcomeScreen offers={offers} clickHandler={()=>{}}/>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.cityOffers,
});

// const mapDispatchToProps = (dispatch) => ({
  
// });

export  {App};

export default connect(mapStateToProps) (App);
