import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { State } from '@/store/types';
import { ThemeMode } from '@/styles/types';
import { getActionNameCreator } from '@/store/utils';

interface UiState {
  theme: {
    mode: ThemeMode;
  };
}

const initialState: UiState = {
  theme: {
    mode: ThemeMode.DARK,
  },
};

const name = 'ui';

const getActionName = getActionNameCreator(name);

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setThemeMode: (state, { payload }: PayloadAction<ThemeMode>) => {
      state.theme.mode = payload;
    },
  },
  extraReducers(builder) {},
});

export const selectTheme = (state: State) => state.ui.theme;

export const selectThemeMode = (state: State) => state.ui.theme.mode;

const { actions, reducer } = slice;

export const { setThemeMode } = actions;
export default reducer;
