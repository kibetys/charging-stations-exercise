import React from 'react'
import PropTypes from 'prop-types'
import './Label.css'

const Label = ({ available }) => {
  const iconName = available ? 'glyphicon glyphicon-ok-sign' : 'glyphicon glyphicon-ban-circle'
  const iconColorClassName = available ? 'available' : 'offline'
  return (
    <div className="labelWrapper">
      <div className="labelContent">
        <i className={`${iconName} ${iconColorClassName} icon`} />
        <div className="statusText">
          {available ? 'Available' : 'Offline'}
        </div>
      </div>
    </div>
  )
}

Label.propTypes = {
  available: PropTypes.number.isRequired,
}

export default Label
