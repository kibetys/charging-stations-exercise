import React from 'react'
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

interface Props {
  readonly onListItemClick: (id: number) => void
}


const Stations = ({ onListItemClick }: Props): JSX.Element => {
  // Expecting that in the future stations will be fetched from API
  // That will be stored in this stations constant
  const { loading, error, data = {} } = useQuery(GET_ALL_STATIONS_QUERY)

  if (loading) return <div>'Loading...'</div>
  if (error) return <div>{error.message}`</div>

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

export default Stations
