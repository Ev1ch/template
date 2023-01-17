import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export const createStore = () => configureStore({ reducer: {} });

const wrapper = createWrapper(createStore);

export default wrapper;
