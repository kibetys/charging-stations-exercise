import React from 'react'
import PropTypes from 'prop-types'
import Stations from '../Stations/Stations'
import StationInfo from '../StationInfo/StationInfo'

const Content = ({ selectedStationId, onListItemClick, onReturnButtonClick }) => {
  // assume that if station_ID can be read from selectedStation object
  // a station has been selected and station info should be displayed
  // otherwise display a list of charging stations
  const isStationSelected = Boolean(selectedStationId)

  return (
    <div className="content">
      {
      isStationSelected
        ? <StationInfo id={selectedStationId} onReturnButtonClick={onReturnButtonClick} />
        : <Stations onListItemClick={onListItemClick} />
      }
    </div>
  )
}

Content.defaultProps = {
  selectedStationId: null,
}

Content.propTypes = {
  selectedStationId: PropTypes.number,
  onListItemClick: PropTypes.func.isRequired,
  onReturnButtonClick: PropTypes.func.isRequired,
}

export default Content
