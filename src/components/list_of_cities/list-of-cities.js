import React from 'react';
import PropTypes from 'prop-types';

const ListOfCities = (props) => {
  const {cities} = props;

  return (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((item, id) => {
          return <li key={`${item}-${id}`} className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>{item.city}</span>
          </a>
          </li>
        })}
      </ul>
    </section>
  </div>
  );
};

ListOfCities.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default ListOfCities;
