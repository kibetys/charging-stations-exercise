import React from 'react'
import PropTypes from 'prop-types'
import Label from '../Label/Label'
import './ListItem.css'

const ListItem = ({ name, available, onClick }) => (
  <div className="listItem" onClick={onClick} aria-hidden="true">
    <div className="listItemContent">
      <div className="stationName">{name}</div>
      <Label available={available} />
    </div>
  </div>
)

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  available: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ListItem
