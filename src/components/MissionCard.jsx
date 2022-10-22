import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <>
        <div data-testid="mission-card" />
        <Title headline="Missões" />
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">
          { year }
          {' '}
        </p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
