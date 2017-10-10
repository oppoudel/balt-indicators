import React from 'react'
import UnitsSold from '../UnitsSold'
import AvgHomePrice from '../AvgHomePrice'
import AvgDaysOnMarket from '../AvgDaysOnMarket'

const ThreeCharts = () => (
  <div className="two-charts ui grid">
    <div className="one-half eight wide column">
      <UnitsSold />
    </div>
    <div className="one-half row">
      <div className="eight wide column one-half">
        <AvgHomePrice />
      </div>
      <div className="eight wide column one-half">
        <AvgDaysOnMarket />
      </div>
    </div>
  </div>
)

export default ThreeCharts
