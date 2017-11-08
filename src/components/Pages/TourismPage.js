import React from 'react';
import AvgDailyRoomRate from '../AvgDailyRoomRate';
import HotelRooms from '../HotelRooms';
import RoomInventory from '../RoomInventory';

const TourismPage = () => (
  <div className="two-charts ui grid">
    <div className="one-half eight wide column">
      <AvgDailyRoomRate />
    </div>
    <div className="one-half row">
      <div className="eight wide column one-half">
        <HotelRooms />
      </div>
      <div className="eight wide column one-half">
        <RoomInventory />
      </div>
    </div>
  </div>
);

export default TourismPage;
