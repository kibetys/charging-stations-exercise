import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Stations from './Stations'
import List from '../List/List'

Enzyme.configure({ adapter: new Adapter() })

test('Renders <Stations /> component', () => {
  const wrapper = shallow(<Stations onListItemClick={() => {}} />)
  expect(wrapper.length).toBe(1)
})

test('Renders <List /> component', () => {
  const wrapper = shallow(<Stations onListItemClick={() => {}} />)
  expect(wrapper.find(List).length).toBe(1)
})

test('Renders expected title', () => {
  const wrapper = shallow(<Stations onListItemClick={() => {}} />)
  const title = wrapper.findWhere((element) => element.props().className === 'title')
  expect(title.text()).toBe('Your Stations')
})
