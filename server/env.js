const dotenv = require('dotenv');

module.exports = {
  getEnvVariables: function() {
    const loadVars = dotenv.load();
    const jsonVars = {};
    for (const key in vars) jsonVars[key] = JSON.stringify(vars[key]);
    return jsonVars;
  },
};
