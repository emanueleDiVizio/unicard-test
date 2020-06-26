import {matchUser} from './pages/User';

const MOCK_DATA = [
  {
    email: 'george.bluth@reqres.in',
    name: 'George',
    surname: 'Bluth',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  },
  {
    email: 'janet.weaver@reqres.in',
    name: 'Janet',
    surname: 'Weaver',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
  },
  {
    email: 'emma.wong@reqres.in',
    name: 'Emma',
    surname: 'Wong',
    image:
      'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
  },
  {
    email: 'eve.holt@reqres.in',
    name: 'Eve',
    surname: 'Holt',
    image:
      'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
  },
  {
    email: 'charles.morris@reqres.in',
    name: 'Charles',
    surname: 'Morris',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
  },
  {
    email: 'tracey.ramos@reqres.in',
    name: 'Tracey',
    surname: 'Ramos',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
  },
];

describe('Main Screen', () => {
  beforeEach(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should display a list of users', async () => {
    for (const item of MOCK_DATA) {
      await matchUser(item);
    }
  });
});
