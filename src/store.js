import { configureStore } from '@reduxjs/toolkit';
import { FrameworkReducer } from '../src/reducers/FrameworkReducer/frameworkSlice';

export default configureStore({ reducer: {
    framework: FrameworkReducer
},})