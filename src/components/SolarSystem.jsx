import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <ul>
          {planets
            .map(({ name, image }) => (
              <PlanetCard planetName={ name } key={ name } planetImage={ image } />
            ))}
        </ul>
      </>
    );
  }
}

SolarSystem.propTypes = {
  Planets: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

planets.defaultPtops = {
  Planets: [],
};

export default SolarSystem;
