import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import uiReducer from '#/ui/slice';

export const createStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
    },
  });

const wrapper = createWrapper(createStore);

export default wrapper;
