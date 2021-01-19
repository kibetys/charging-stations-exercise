import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Label from './Label'

Enzyme.configure({ adapter: new Adapter() })

test('Renders <Label /> component', () => {
  const wrapper = shallow(<Label available={1} />)
  expect(wrapper.length).toBe(1)
})

test('Should have expected styles and status text when available prop is truthy', () => {
  const wrapper = shallow(<Label available={1} />)
  const glyphicon = wrapper.find('i')
  expect(glyphicon.props().className).toBe('glyphicon glyphicon-ok-sign available icon')
  expect(wrapper.text()).toBe('Available')
})

test('Should have expected styles and status text when available prop is falsy', () => {
  const wrapper = shallow(<Label available={0} />)
  const glyphicon = wrapper.find('i')
  expect(glyphicon.props().className).toBe('glyphicon glyphicon-ban-circle offline icon')
  expect(wrapper.text()).toBe('Offline')
})
