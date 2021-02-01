import React, { ReactElement } from 'react'
import Stations from '../Stations/Stations'
import StationInfo from '../StationInfo/StationInfo'

interface Props {
  readonly selectedStationId: number | null,
  onListItemClick: (id: number) => void,
  onReturnButtonClick: () => void,
}

const Content = ({ selectedStationId, onListItemClick, onReturnButtonClick }: Props): ReactElement => {

  return (
    <div className="content">
      {
      selectedStationId !== null && selectedStationId !== undefined
        ? <StationInfo id={selectedStationId} onReturnButtonClick={onReturnButtonClick} />
        : <Stations onListItemClick={onListItemClick} />
      }
    </div>
  )
}

export default Content
