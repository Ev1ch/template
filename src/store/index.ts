import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import environment from '@/environment/client';
import uiReducer from '#/ui/slice';

export const createStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
    },
    devTools: environment.isDevelopment,
  });

const wrapper = createWrapper(createStore);

export default wrapper;
