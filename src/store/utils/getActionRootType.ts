import type { AnyAction } from '@reduxjs/toolkit';

const getActionRootType = (action: AnyAction) =>
  action.type.replace(/\/pending|\/rejected|\/fulfilled/, '');

export default getActionRootType;
