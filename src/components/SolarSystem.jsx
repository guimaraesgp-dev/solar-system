import React, { Component } from 'react';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <p className="SolarSystem">{planet}</p>
      </div>
    );
  }
}

export default SolarSystem;
