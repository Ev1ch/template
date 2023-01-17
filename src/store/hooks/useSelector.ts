import {
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

import type { State } from '../types';

const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export default useSelector;
