import React from 'react';
import NetAbsorption from '../NetAbsorption';
import VacancyRates from '../VacancyRates';

const CommercialRealEstate = () => (
  <div className="two-charts ui grid">
    <div className="one-half row">
      <div className="one-half eight wide column">
        <NetAbsorption />
      </div>
    </div>
    <div className="one-half row">
      <div className="eight wide column one-half">
        <VacancyRates />
      </div>
    </div>
  </div>
);

export default CommercialRealEstate;
