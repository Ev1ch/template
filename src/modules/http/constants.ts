import type { CreateAxiosDefaults } from 'axios';

export const MAXIMUM_TIMEOUT = 5000;

export const CONFIG: CreateAxiosDefaults = {
  timeout: MAXIMUM_TIMEOUT,
};
