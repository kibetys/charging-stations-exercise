import React from 'react'
import PropTypes from 'prop-types'
import { useQuery, gql } from '@apollo/client'
import './StationInfo.css'

const GET_STATION_BY_ID_QUERY = gql`
  query ($station_ID: Int!) {
    getStationById(station_ID: $station_ID) {
      station_ID
      name
      status
    }
  }
`

const StationInfo = ({ id, onReturnButtonClick }) => {
  const { loading, error, data } = useQuery(GET_STATION_BY_ID_QUERY, {
    variables: { station_ID: id },
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const { getStationById } = data
  const stationData = getStationById
  return (
    <div>
      <div className="titleWrapper">
        <i aria-hidden className="glyphicon glyphicon-arrow-left returnButton" onClick={onReturnButtonClick} />
        <div className="title">{stationData.name}</div>
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
}

StationInfo.propTypes = {
  id: PropTypes.number.isRequired,
  onReturnButtonClick: PropTypes.func.isRequired,
}

export default StationInfo
