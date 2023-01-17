import { useDispatch as useReduxDispatch } from 'react-redux';

import type { Dispatch } from '../types';

const useDispatch = () => useReduxDispatch<Dispatch>();

export default useDispatch;
