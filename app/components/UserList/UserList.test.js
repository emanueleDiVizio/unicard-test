import React from 'react';
import UserList from './UserList';
import {render} from 'react-native-testing-library';
import {useSelector, useDispatch} from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

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

describe('UserList', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('dispatches thunk to fetch user data', () => {
    useSelector.mockImplementationOnce(() => ({
      users: [],
      isLoading: true,
    }));
    render(<UserList />).toJSON();

    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it('displays nothing when loading', () => {
    useSelector.mockImplementationOnce(() => ({
      users: [],
      isLoading: true,
    }));
    const element = render(<UserList />).toJSON();

    expect(element).toMatchSnapshot();
  });

  it('displays user list when data is loaded', () => {
    useSelector.mockImplementationOnce(() => ({
      users: MOCK_DATA,
      isLoading: false,
    }));
    const element = render(<UserList />).toJSON();

    expect(element).toMatchSnapshot();
  });
});
