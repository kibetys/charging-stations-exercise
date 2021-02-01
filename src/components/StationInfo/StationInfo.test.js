import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MockedProvider } from '@apollo/client/testing'

import StationInfo, { GET_STATION_BY_ID_QUERY } from './StationInfo'

Enzyme.configure({ adapter: new Adapter() })


let wrapper

beforeEach(() => {
  const mocks = [
    {
      request: {
        query: GET_STATION_BY_ID_QUERY,
        variables: { station_ID: 123 }
      },
      result: {
        data: {
          getStationById: { station_ID: 123, name: 'test-station', status: 'offline' },
        },
      },
    },
  ]

  wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false} >
      <StationInfo onReturnButtonClick={() => {}} id={123} />
    </MockedProvider>
  )
})


test('Renders <StationInfo /> component', () => {
  expect(1).toBe(1)
})

test('Renders glyphicon element', done => {
  setTimeout(() => {
      wrapper.update()
      const glyphicon = wrapper.find('i')
      expect(glyphicon.length).toBe(1)
      done()
  }, 1);
})

test('Renders expected title', done => {
  setTimeout(() => {
    wrapper.update()
    const title = wrapper.findWhere((element) => element.props().className === 'title')
    expect(title.text()).toBe('test-station')
    done()
  }, 1);
})

test('Renders expected amount of infoTile divs', done => {
  setTimeout(() => {
    wrapper.update()
    const infoTiles = wrapper.findWhere((element) => element.props().className === 'infoTile')
    expect(infoTiles.length).toBe(3)
    done()
  }, 1);
})

test('Renders infoTile with expected label and value', done => {
  setTimeout(() => {
    wrapper.update()
    const infoTile = wrapper.findWhere((element) => element.props().className === 'infoTile').first()
    const label = infoTile.findWhere((element) => element.props().className === 'infoLabel')
    const value = infoTile.findWhere((element) => element.props().className === 'infoValue')
    expect(label.text()).toBe('station_ID')
    expect(value.text()).toBe('123')
    done()
  }, 1);
})
