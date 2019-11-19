import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place_card/place-card';

class ListOfOffers extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: ``
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(id) {
    this.setState({
      activeCard: id
    });
  }

  mouseLeave() {
    this.setState({
      activeCard: ``
    });
  }

  render() {

    const {offers} = this.props;
    return (
      offers.map((item, id) =>
        <PlaceCard key={`${item}-${id}`}
          mouseEnter={this.mouseEnter}
          mouseLeave={this.mouseLeave}
          id={item}
          clickHandler={()=>{}}
          placeImage={item.image}
          placePrice={item.price}
          placeDescrioption={item.descriptions}
          placeType={item.type}
        />
      )
    );
  }
}

ListOfOffers.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default ListOfOffers;
