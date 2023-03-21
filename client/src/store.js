import { configureStore } from '@reduxjs/toolkit';
import frameworkSlice from './reducers/FrameworkReducer';

export default configureStore({ reducer: {
    framework: frameworkSlice.reducer
},})