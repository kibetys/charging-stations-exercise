import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import List from './List'
import ListItem from '../ListItem/ListItem'

Enzyme.configure({ adapter: new Adapter() })

test('Renders <List /> component', () => {
  const items = [
    {
      name: 'test-item',
      available: 1,
    },
  ]
  const wrapper = shallow(<List items={items} onListItemClick={() => {}} />)
  expect(wrapper.length).toBe(1)
})

test('Renders expected amount of <ListItem /> components', () => {
  const items = [
    {
      name: 'test-item',
      available: 1,
    },
    {
      name: 'test-item-2',
      available: 0,
    },
  ]
  const wrapper = shallow(<List items={items} onListItemClick={() => {}} />)
  const listItems = wrapper.find(ListItem)
  expect(listItems.length).toBe(2)
})

test('Should call onListItemClick when click event is simulated', () => {
  const items = [
    {
      name: 'test-item',
      available: 1,
    },
  ]
  const onListItemClick = jest.fn()
  const wrapper = shallow(<List items={items} onListItemClick={onListItemClick} />)
  wrapper.find(ListItem).simulate('click')
  expect(onListItemClick.mock.calls.length).toBe(1)
})
