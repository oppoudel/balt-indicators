import React from 'react';
import UnemploymentRate from '../UnemploymentRate';
import LaborForce from '../LaborForce';
import BusinessEmployment from '../BusinessEmployment';

const ResidentialRealEstate = () => (
  <div className="two-charts ui grid">
    <div className="one-half eight wide column">
      <UnemploymentRate />
    </div>
    <div className="one-half row">
      <div className="eight wide column one-half">
        <LaborForce />
      </div>
      <div className="eight wide column one-half">
        <BusinessEmployment />
      </div>
    </div>
  </div>
);

export default ResidentialRealEstate;
