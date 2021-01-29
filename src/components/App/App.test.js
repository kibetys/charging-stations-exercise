import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import Content from '../Content/Content'

Enzyme.configure({ adapter: new Adapter() })

test('Renders <App /> component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.length).toBe(1)
})

test('Renders <Content /> component', () => {
  const wrapper = shallow(<App />)
  const stationsComponent = wrapper.find(Content)
  expect(stationsComponent.length).toBe(1)
})
