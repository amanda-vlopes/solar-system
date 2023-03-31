import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="solarSystem__card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } id={ planetName } />
        <p data-testid="planet-name" className="planets__name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
