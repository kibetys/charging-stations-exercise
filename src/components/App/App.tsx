import React, { useState } from 'react'
import Content from '../Content/Content'
import './App.css'

const App = (): JSX.Element => {

  const [state, setState] = useState<{id: null | number}>({ id: null })

  const setId = (id: number) => {
    setState(prevState => ({ ...prevState, id }))
  }

  const clearId = () => {
    setState(prevState => ({ ...prevState, id: null }))
  }

  return (
    <div className="content">
      <Content selectedStationId={state.id} onReturnButtonClick={clearId} onListItemClick={setId} />
    </div>
  )
}

export default App
