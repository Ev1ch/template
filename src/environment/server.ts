import * as envalid from 'envalid';

const environment = envalid.cleanEnv(process.env, {});

export default environment;
