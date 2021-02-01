import React from 'react'
import './Label.css'

interface Props {
  available: number
}

const Label = ({ available }: Props): JSX.Element => {
  const iconName: string = available ? 'glyphicon glyphicon-ok-sign' : 'glyphicon glyphicon-ban-circle'
  const iconColorClassName: string = available ? 'available' : 'offline'
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

export default Label
