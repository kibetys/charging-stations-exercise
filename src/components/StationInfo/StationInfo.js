import React from 'react'
import PropTypes from 'prop-types'
import './StationInfo.css'

const StationInfo = ({ name, stationData, onReturnButtonClick }) => (
  <div>
    <div className="titleWrapper">
      <i aria-hidden className="glyphicon glyphicon-arrow-left returnButton" onClick={onReturnButtonClick} />
      <div className="title">{name}</div>
    </div>
    <div className="infoArea">
      {Object.entries(stationData).map(([label, value]) => (
        <div key={label} className="infoTile">
          <div className="infoLabel">{label}</div>
          <div className="infoValue">{value}</div>
        </div>
      ))}
    </div>
  </div>
)

StationInfo.defaultProps = {
  stationData: {},
}

StationInfo.propTypes = {
  name: PropTypes.string.isRequired,
  stationData: PropTypes.objectOf(PropTypes.any),
  onReturnButtonClick: PropTypes.func.isRequired,
}

export default StationInfo
