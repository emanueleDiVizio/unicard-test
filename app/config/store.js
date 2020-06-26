import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../state';

export default configureStore({
  reducer: rootReducer,
});
