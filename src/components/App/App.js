import React, { useState } from 'react'
import Content from '../Content/Content'
import './App.css'

const App = () => {
  const [selectedStationId, setSelectedStationId] = useState('')

  const onReturnButtonClick = () => setSelectedStationId('')
  const onListItemClick = (id) => setSelectedStationId(id)

  return (
    <div className="content">
      <Content selectedStationId={selectedStationId} onReturnButtonClick={onReturnButtonClick} onListItemClick={onListItemClick} />
    </div>
  )
}

export default App
