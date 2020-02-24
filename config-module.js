import envJSON from './env.variables.json';

exports.config = function() {
  const nodeEnv = process.env.NODE_ENV || 'development';
  return envJSON[nodeEnv];
};
