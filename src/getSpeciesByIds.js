const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((animal) => ids.some((id) => animal.id === id));

module.exports = getSpeciesByIds;
