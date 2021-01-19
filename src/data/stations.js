const data = [
  {
    station_ID: 101,
    custom_evse_id: null,
    location_ID: 101,
    seller_ID: 27,
    name: 'Endesa',
    connected: 1,
    position: '60.868623,26.702901',
    available: 0,
    lastconnect: '2019-02-22T13:35:48.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 102,
    custom_evse_id: null,
    location_ID: 102,
    seller_ID: 27,
    name: 'Endesa 2',
    connected: 1,
    position: '60.868623,26.702901',
    available: 0,
    lastconnect: '2019-02-22T13:36:12.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 103,
    custom_evse_id: null,
    location_ID: 103,
    seller_ID: 27,
    name: 'Endesa 3',
    connected: 1,
    position: '60.868623,26.702901',
    available: 0,
    lastconnect: '2019-03-26T06:46:32.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 104,
    custom_evse_id: null,
    location_ID: 104,
    seller_ID: 27,
    name: 'Endesa 4',
    connected: 1,
    position: '60.868623,26.702901',
    available: 1,
    lastconnect: '2018-03-15T11:25:47.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 105,
    custom_evse_id: null,
    location_ID: 105,
    seller_ID: 27,
    name: 'Endesa 5',
    connected: 0,
    position: '60.868623,26.702901',
    available: 1,
    lastconnect: '2018-09-26T12:59:46.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 401,
    custom_evse_id: null,
    location_ID: 1001,
    seller_ID: 1000503,
    name: 'Energy Management test charger',
    connected: 1,
    position: ',',
    available: 1,
    lastconnect: '2021-01-12T15:34:30.000Z',
    roaming_identifier_cpo: null,
  },
  {
    station_ID: 911,
    custom_evse_id: null,
    location_ID: 911,
    seller_ID: 1000503,
    name: 'Station_For_Testing_Purposes',
    connected: 1,
    position: '60.17952,24.811269',
    available: 1,
    lastconnect: '2021-01-12T15:34:32.000Z',
    roaming_identifier_cpo: null,
  },
  {
    station_ID: 994,
    custom_evse_id: null,
    location_ID: 994,
    seller_ID: 27,
    name: 'Robot test: No OTP',
    connected: 1,
    position: '61.55,21.55',
    available: 1,
    lastconnect: '2021-01-12T15:34:11.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 995,
    custom_evse_id: null,
    location_ID: 995,
    seller_ID: 27,
    name: 'Robot test: branded redirect',
    connected: 1,
    position: '61.55,21.55',
    available: 1,
    lastconnect: '2021-01-12T15:34:10.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 996,
    custom_evse_id: null,
    location_ID: 996,
    seller_ID: 21,
    name: 'Robot test: unbranded redirect',
    connected: 1,
    position: '61.55,21.55',
    available: 1,
    lastconnect: '2021-01-12T15:34:11.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 997,
    custom_evse_id: null,
    location_ID: 997,
    seller_ID: 21,
    name: 'Robot test: not plugged in',
    connected: 0,
    position: '61.54,21.54',
    available: 1,
    lastconnect: '2020-05-25T13:56:03.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 998,
    custom_evse_id: '998*1',
    location_ID: 998,
    seller_ID: 21,
    name: 'Robot test free charging',
    connected: 1,
    position: '36.093666,-115.1473',
    available: 0,
    lastconnect: '2021-01-12T15:34:24.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 999,
    custom_evse_id: 'A*CUSTOM_ID*999',
    location_ID: 999,
    seller_ID: 27,
    name: 'Robot_test_do_not_use',
    connected: 1,
    position: '61.55,21.55',
    available: 1,
    lastconnect: '2021-01-12T15:34:24.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1000,
    custom_evse_id: null,
    location_ID: 1000,
    seller_ID: 882,
    name: 'Kati DC',
    connected: 1,
    position: '59.31643200,18.06927300',
    available: 1,
    lastconnect: '2021-01-12T15:34:31.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1003,
    custom_evse_id: null,
    location_ID: 1003,
    seller_ID: 27,
    name: 'ABB NL Test',
    connected: 0,
    position: '0,0',
    available: 0,
    lastconnect: '2014-02-11T11:21:49.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1004,
    custom_evse_id: null,
    location_ID: 1004,
    seller_ID: 27,
    name: 'ABB NL Test Prod',
    connected: 0,
    position: '',
    available: 0,
    lastconnect: '2014-10-30T10:52:51.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1005,
    custom_evse_id: null,
    location_ID: 1005,
    seller_ID: 48,
    name: 'Ensto Porvoo test',
    connected: 0,
    position: '',
    available: 0,
    lastconnect: '2014-09-08T07:47:00.000Z',
    roaming_identifier_cpo: null,
  },
  {
    station_ID: 1006,
    custom_evse_id: null,
    location_ID: 1006,
    seller_ID: 1231,
    name: 'A. Lehmann Elektro AG',
    connected: 0,
    position: '47.415921,9.248205',
    available: 0,
    lastconnect: '2015-02-13T08:03:00.000Z',
    roaming_identifier_cpo: null,
  },
  {
    station_ID: 1007,
    custom_evse_id: null,
    location_ID: 1007,
    seller_ID: 21,
    name: 'Mäntsälä pikalataus (1007)',
    connected: 0,
    position: '60.634314,25.317408',
    available: 0,
    lastconnect: '2015-02-13T08:03:23.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1008,
    custom_evse_id: null,
    location_ID: 1008,
    seller_ID: 21,
    name: 'Oulu pikalataus (1008)',
    connected: 0,
    position: '65.017595,25.481512',
    available: 1,
    lastconnect: '2015-02-13T08:02:35.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1009,
    custom_evse_id: null,
    location_ID: 1009,
    seller_ID: 3,
    name: 'Tammisaaren asema, pikalataus (1009)',
    connected: 0,
    position: '59.979042,23.442547',
    available: 0,
    lastconnect: '2015-02-13T08:03:11.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1010,
    custom_evse_id: null,
    location_ID: 1010,
    seller_ID: 10,
    name: 'Martinlaakso, Vantaa, pikalataus (1010)',
    connected: 0,
    position: '60.278395,24.853578',
    available: 0,
    lastconnect: '2015-02-13T08:03:08.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1011,
    custom_evse_id: null,
    location_ID: 1011,
    seller_ID: 15,
    name: 'Kotka pikalataus (1011)',
    connected: 0,
    position: '60.4678206,26.945260',
    available: 1,
    lastconnect: '2018-03-28T07:33:08.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1012,
    custom_evse_id: null,
    location_ID: 1012,
    seller_ID: 18,
    name: 'Naantali pikalataus (1012) ג׆אב',
    connected: 0,
    position: '60.467149,22.027585',
    available: 1,
    lastconnect: '2015-02-13T08:02:28.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1013,
    custom_evse_id: null,
    location_ID: 1013,
    seller_ID: 48,
    name: 'swisscharge.ch AG',
    connected: 0,
    position: '47.415892,9.252504',
    available: 0,
    lastconnect: '2014-08-22T09:15:41.000Z',
    roaming_identifier_cpo: null,
  },
  {
    station_ID: 1014,
    custom_evse_id: null,
    location_ID: 1014,
    seller_ID: 8,
    name: 'Abcd',
    connected: 0,
    position: '60.169584741559,24.93819450566',
    available: 0,
    lastconnect: '2015-02-13T08:03:27.000Z',
    roaming_identifier_cpo: 'FI*001',
  },
  {
    station_ID: 1015,
    custom_evse_id: null,
    location_ID: 1015,
    seller_ID: 48,
    name: 'Linja-autoasema, Turku',
    connected: 0,
    position: '60.4563345,22.267980',
    available: 0,
    lastconnect: '2015-02-13T08:03:23.000Z',
    roaming_identifier_cpo: null,
  },
]

export default data
