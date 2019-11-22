import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';


class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    const {mapMarks} = props;
  }

  componentDidMount() {

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });


    const map = leaflet.map((`map`), {
      center: city,
      zoom: 12,
      zoomControl: true,
      marker: true,
      zoomDelta: 1
    });
    map.setView(city);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    this.props.mapMarks.map((element) => {
      leaflet
      .marker(element.coordinates, {icon})
      .addTo(map)
      .bindPopup(element.descriptions)
      .openPopup();

    });

  }

  render() {

    return (
      <div id="map" style={{height: `97%`, marginTop: `14px`}}>

      </div>

    );
  }
}

Map.propTypes = {
  mapMarks: PropTypes.array.isRequired,
};

export default Map;
