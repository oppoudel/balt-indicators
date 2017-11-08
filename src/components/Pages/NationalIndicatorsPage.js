import React from 'react';
import ConsumerPriceIndex from '../ConsumerPriceIndex';
import GrossDomesticProduct from '../GrossDomesticProduct';
import USConsumerConfidence from '../USConsumerConfidence';

const NationalIndicatorsPage = () => (
  <div className="two-charts ui grid">
    <div className="one-half eight wide column">
      <ConsumerPriceIndex />
    </div>
    <div className="one-half row">
      <div className="eight wide column one-half">
        <GrossDomesticProduct />
      </div>
      <div className="eight wide column one-half">
        <USConsumerConfidence />
      </div>
    </div>
  </div>
);

export default NationalIndicatorsPage;
