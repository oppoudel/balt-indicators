import React from 'react';
import SalesTaxRevenue from '../SalesTaxRevenue';
import YearToDateRevenue from '../YearToDateRevenue';

const SalesTaxRevenuePage = () => (
  <div className="two-charts ui grid">
    <div className="one-half row">
      <div className="one-half eight wide column">
        <SalesTaxRevenue />
      </div>
    </div>
    <div className="one-half row">
      <div className="eight wide column one-half">
        <YearToDateRevenue />
      </div>
    </div>
  </div>
);

export default SalesTaxRevenuePage;
