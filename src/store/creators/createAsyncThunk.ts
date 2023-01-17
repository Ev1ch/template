import {
  createAsyncThunk as createReduxAsyncThunk,
  type AsyncThunkPayloadCreator,
  type AsyncThunkOptions,
} from '@reduxjs/toolkit';

import { serialize } from '#/errors/utils';
import type { ThunkOptions } from '../types';

const createAsyncThunk = <Returned = void, Argument = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, Argument, ThunkOptions>,
  options?: AsyncThunkOptions<Argument, ThunkOptions>,
) =>
  createReduxAsyncThunk<Returned, Argument, ThunkOptions>(typePrefix, payloadCreator, {
    serializeError: serialize,
    ...options,
  });

export default createAsyncThunk;
