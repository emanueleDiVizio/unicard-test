import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from '../../api';

const getUsers = createAsyncThunk(
  'user/getUsers',
  async (_, {rejectWithValue, getState}) => {
    const response = await userAPI.getUsers();
    if (response.ok) {
      return response.data;
    } else {
      return rejectWithValue(response.problem);
    }
  },
);

export const slice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    [getUsers.fulfilled]: (state, action) => {
      if (state.isLoading) {
        state.isLoading = false;
        state.users = action.payload;
      }
    },
    [getUsers.rejected]: (state, action) => {
      if (state.isLoading) {
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload.errorMessage;
        } else {
          state.error = action.error;
        }
      }
    },
  },
});

export const thunks = {getUsers};
