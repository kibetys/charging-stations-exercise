import React from 'react'
import Label from '../Label/Label'
import './ListItem.css'

interface Props {
  readonly name: string,
  readonly available: number,
  onClick: () => void
}

const ListItem = ({ name, available, onClick }: Props) => (
  <div className="listItem" onClick={onClick} aria-hidden="true">
    <div className="listItemContent">
      <div className="stationName">{name}</div>
      <Label available={available} />
    </div>
  </div>
)

export default ListItem
