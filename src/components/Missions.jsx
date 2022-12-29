import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions" />
        <Title headline="Missões" />
        <ul>
          {missions
            .map((a) => (
              <MissionCard
                key={ a }
                mission-name={ a.name }
                mission-year={ a.year }
                mission-country={ a.country }
                mission-destination={ a.destination }
              />
            ))}
        </ul>
      </>
    );
  }
}

Missions.propTypes = {
  Missions: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }).isRequired,
};

missions.defaultPtops = {
  Missions: [],
};

export default Missions;
