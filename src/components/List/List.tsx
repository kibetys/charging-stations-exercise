import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'

interface ListItem {
  station_ID: number,
  name: string,
  available: number
}

interface Props {
  onListItemClick: (id: number) => void,
  items: Array<ListItem>
}

const List = ({ onListItemClick, items }: Props): JSX.Element => (
  <div>
    {items.map((item) => (
      <ListItem
        key={item.station_ID}
        name={item.name}
        available={item.available}
        onClick={() => onListItemClick(item.station_ID)}
      />
    ))}
  </div>
)

List.propTypes = {
  onListItemClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List
