import React from 'react'
import PropTypes from 'prop-types'
import List from '../List/List'
import stationsData from '../../data/stations'
import './Stations.css'

const Stations = ({ onListItemClick }) => {
  // Expecting that in the future stations will be fetched from API
  // That will be stored in this stations constant
  const stations = stationsData
  return (
    <div className="stationsListWrapper">
      <div className="title">
        Your Stations
      </div>
      <List onListItemClick={onListItemClick} items={stations} />
    </div>
  )
}

Stations.propTypes = {
  onListItemClick: PropTypes.func.isRequired,
}

export default Stations
