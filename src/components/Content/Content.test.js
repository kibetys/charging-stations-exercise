import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Content from './Content'
import Stations from '../Stations/Stations'
import StationInfo from '../StationInfo/StationInfo'

Enzyme.configure({ adapter: new Adapter() })

test('Renders <Content /> component', () => {
  const wrapper = shallow(<Content />)
  expect(wrapper.length).toBe(1)
})

test('Renders <Stations /> component', () => {
  const wrapper = shallow(<Content />)
  const stationsComponent = wrapper.find(Stations)
  expect(stationsComponent.length).toBe(1)
})

test('Renders <StationInfo /> component when selectedStationId prop is given', () => {
  const wrapper = shallow(<Content selectedStationId={1} />)
  const stationsComponent = wrapper.find(StationInfo)
  expect(stationsComponent.length).toBe(1)
})
