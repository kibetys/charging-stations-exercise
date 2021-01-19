import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import Stations from '../Stations/Stations'

Enzyme.configure({ adapter: new Adapter() })

test('Renders <App /> component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.length).toBe(1)
})

test('Renders <Stations /> component', () => {
  const wrapper = shallow(<App />)
  const stationsComponent = wrapper.find(Stations)
  expect(stationsComponent.length).toBe(1)
})
