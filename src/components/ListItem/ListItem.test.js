import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ListItem from './ListItem'
import Label from '../Label/Label'

Enzyme.configure({ adapter: new Adapter() })

test('Renders <ListItem /> component', () => {
  const wrapper = shallow(<ListItem name="test-item" available={1} onClick={() => {}} />)
  expect(wrapper.length).toBe(1)
})

test('Renders <Label /> component', () => {
  const wrapper = shallow(<ListItem name="test-item" available={1} onClick={() => {}} />)
  const labelComponent = wrapper.find(Label)
  expect(labelComponent.length).toBe(1)
})

test('Renders name prop as text', () => {
  const wrapper = shallow(<ListItem name="test-item" available={1} onClick={() => {}} />)
  const nameField = wrapper.findWhere((element) => element.props().className === 'stationName')
  expect(nameField.text()).toBe('test-item')
})
