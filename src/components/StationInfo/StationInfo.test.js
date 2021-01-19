import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import StationInfo from './StationInfo'

Enzyme.configure({ adapter: new Adapter() })

test('Renders <StationInfo /> component', () => {
  const wrapper = shallow(<StationInfo onReturnButtonClick={() => {}} name="test-name" />)
  expect(wrapper.length).toBe(1)
})

test('Renders glyphicon element', () => {
  const wrapper = shallow(<StationInfo onReturnButtonClick={() => {}} name="test-name" />)
  const glyphicon = wrapper.find('i')
  expect(glyphicon.length).toBe(1)
})

test('Renders expected title', () => {
  const wrapper = shallow(<StationInfo onReturnButtonClick={() => {}} name="test-name" />)
  const title = wrapper.findWhere((element) => element.props().className === 'title')
  expect(title.text()).toBe('test-name')
})

test('Renders expected amount of infoTile divs', () => {
  const wrapper = shallow(<StationInfo onReturnButtonClick={() => {}} name="test-name" stationData={{ foo: 'bar', baz: 'qux' }} />)
  const infoTiles = wrapper.findWhere((element) => element.props().className === 'infoTile')
  expect(infoTiles.length).toBe(2)
})

test('Renders infoTile with expected label and value', () => {
  const wrapper = shallow(<StationInfo onReturnButtonClick={() => {}} name="test-name" stationData={{ foo: 'bar' }} />)
  const infoTile = wrapper.findWhere((element) => element.props().className === 'infoTile')
  const label = infoTile.findWhere((element) => element.props().className === 'infoLabel')
  const value = infoTile.findWhere((element) => element.props().className === 'infoValue')
  expect(label.text()).toBe('foo')
  expect(value.text()).toBe('bar')
})
