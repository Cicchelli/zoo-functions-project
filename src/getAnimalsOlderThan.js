const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find((specie) => specie.name === animal);
  let hasMinimumAge = true;
  species.residents.forEach((resident) => {
    if (resident.age < age) hasMinimumAge = false;
  });
  return hasMinimumAge;
};

module.exports = getAnimalsOlderThan;
