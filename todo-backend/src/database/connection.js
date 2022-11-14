const knex = require('knex');
const congfig = require('./knexfile');
const knexInstance = knex(congfig.development);

module.exports= knexInstance;