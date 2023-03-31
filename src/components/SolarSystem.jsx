import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar__system">
        <Title headline="PLANETAS" />
        <div className="planets">
          {planets.map(({ name, image }) => (<PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
