import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from '../../api';

const getUsers = createAsyncThunk(
  'user/getUsers',
  async (_, {rejectWithValue}) => {
    const response = await userAPI.getUsers();
    if (response.ok) {
      return response.data;
    } else {
      return rejectWithValue(response.problem);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [getUsers.fullfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.error = action.payload.errorMessage;
    },
  },
});

export default {slice: userSlice, thunks: {getUsers}};
