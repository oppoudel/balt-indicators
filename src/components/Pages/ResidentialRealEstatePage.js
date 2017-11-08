import React from 'react';
import UnitsSold from '../UnitsSold';
import AvgHomePrice from '../AvgHomePrice';
import AvgDaysOnMarket from '../AvgDaysOnMarket';

const ResidentialRealEstate = () => (
  <div className="two-charts ui grid">
    <div className="one-half eight wide column">
      <AvgHomePrice />
    </div>
    <div className="one-half row">
      <div className="eight wide column one-half">
        <AvgDaysOnMarket />
      </div>
      <div className="eight wide column one-half">
        <UnitsSold />
      </div>
    </div>
  </div>
);

export default ResidentialRealEstate;
