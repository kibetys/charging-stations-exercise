import React, { useState } from 'react'
import Stations from '../Stations/Stations'
import StationInfo from '../StationInfo/StationInfo'
import './App.css'

const App = () => {
  const [selectedStation, setSelectedStation] = useState({})

  const onReturnButtonClick = () => setSelectedStation({})
  const onListItemClick = (row) => setSelectedStation(row)

  // assume that if station_ID can be read from selectedStation object
  // a station has been selected and station info should be displayed
  // otherwise display a list of charging stations
  const isStationSelected = Boolean(selectedStation.station_ID)

  return (
    <div className="content">
      {
      isStationSelected
        ? <StationInfo name={selectedStation.name} stationData={{ ...selectedStation }} onReturnButtonClick={onReturnButtonClick} />
        : <Stations onListItemClick={onListItemClick} />
      }
    </div>
  )
}

export default App
