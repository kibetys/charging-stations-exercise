import React from 'react'
import PropTypes from 'prop-types'
import { useQuery, gql } from '@apollo/client'

import List from '../List/List'
import './Stations.css'

const GET_ALL_STATIONS_QUERY = gql`
query  {
getAllStations {
    station_ID
    name
    available
  }
}
`

const Stations = ({ onListItemClick }) => {
  // Expecting that in the future stations will be fetched from API
  // That will be stored in this stations constant
  const { loading, error, data = {} } = useQuery(GET_ALL_STATIONS_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const { getAllStations } = data
  return (
    <div className="stationsListWrapper">
      <div className="title">
        Your Stations
      </div>
      { !loading && getAllStations && <List onListItemClick={onListItemClick} items={getAllStations} /> }
    </div>
  )
}

Stations.propTypes = {
  onListItemClick: PropTypes.func.isRequired,
}

export default Stations
