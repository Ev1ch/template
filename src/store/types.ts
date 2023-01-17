import { createStore } from './index';

export type Store = ReturnType<typeof createStore>;

export type State = ReturnType<Store['getState']>;

export type Dispatch = Store['dispatch'];

export type ThunkOptions = {
  state: State;
  dispatch: Dispatch;
};
