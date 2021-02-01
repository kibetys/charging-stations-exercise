import React, { ReactElement } from 'react'
import { useQuery, gql } from '@apollo/client'
import './StationInfo.css'

export const GET_STATION_BY_ID_QUERY = gql`
  query ($station_ID: Int!) {
    getStationById(station_ID: $station_ID) {
      station_ID
      name
      status
    }
  }
`

interface Props {
  readonly id: number,
  readonly onReturnButtonClick: () => void
}

interface StationData {
  name: string
}

const StationInfo = ({ id, onReturnButtonClick }: Props): JSX.Element => {
  const { loading, error, data = {} } = useQuery(GET_STATION_BY_ID_QUERY, {
    variables: { station_ID: id },
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  const { getStationById } = data
  const stationData: StationData = getStationById
  return (
    <div>
      <div className="titleWrapper">
        <i aria-hidden className="glyphicon glyphicon-arrow-left returnButton" onClick={onReturnButtonClick} />
        <div className="title">{stationData.name}</div>
      </div>
      <div className="infoArea">
        {Object.entries(stationData).map(([label, value]): ReactElement => (
          <div key={label} className="infoTile">
            <div className="infoLabel">{label}</div>
            <div className="infoValue">{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StationInfo
