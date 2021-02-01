import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MockedProvider } from "@apollo/client/testing";
import { act } from 'react-dom/test-utils';

import Stations, { GET_ALL_STATIONS_QUERY } from './Stations'
import List from '../List/List'

Enzyme.configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  const mocks = [
    {
      request: {
        query: GET_ALL_STATIONS_QUERY,
      },
      result: {
        data: {
          getAllStations: [{ station_ID: 123, name: 'test-station', available: 1 }],
        },
      },
    },
  ]

  wrapper = mount(
    <MockedProvider mocks={mocks} >
      <Stations onListItemClick={() => {}}/>
    </MockedProvider>
  )
})

test('Renders <Stations /> component', () => {
  expect(wrapper.length).toBe(1)
})

test('Renders <List /> component', done => {
  setTimeout(() => {
    act(() => {
      wrapper.update()
      expect(wrapper.find(List).length).toBe(1)
      done()
    })
  }, 1);
})

test('Renders expected title', done => {
  setTimeout(() => {
    act(() => {
      wrapper.update()
      console.log(wrapper.debug())
      const title = wrapper.findWhere((element) => element.props().className === 'title')
      expect(title.text()).toBe('Your Stations')
      done()
    })
  }, 1);
})
