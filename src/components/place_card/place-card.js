import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {


  const {clickHandler, mouseLeave, mouseEnter, id} = props;
  const {placeImage, placePrice, placeDescrioption, placeType} = props;
  return (
    <article onMouseEnter={() => {
      mouseEnter(id);
    }}
    onMouseLeave={() => {
      mouseLeave();
    }} className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={placeImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{placePrice}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a className="place-card__descriptions" onClick={clickHandler} href="#">{placeDescrioption}</a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  mouseEnter: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
  id: PropTypes.object.isRequired,
  placeImage: PropTypes.string.isRequired,
  placePrice: PropTypes.string.isRequired,
  placeDescrioption: PropTypes.string.isRequired,
  placeType: PropTypes.string.isRequired
};

export default PlaceCard;
