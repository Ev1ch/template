import axios from 'axios';

import { CONFIG } from './constants';

const instance = axios.create(CONFIG);

export default instance;
