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
              <li key={ a.name }>
                <MissionCard
                  name={ a.name }
                  year={ a.year }
                  country={ a.country }
                  destination={ a.destination }
                />
              </li>
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

export default Missions;
