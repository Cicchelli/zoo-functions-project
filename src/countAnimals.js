const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal) {
    const selectedSpecie = species.filter((specie) => specie.name === animal.species);
    const residentsOfSex = selectedSpecie[0]
      .residents.filter((resident) => {
        if (animal.sex) {
          return resident.sex === animal.sex;
        }
        return true;
      });
    return residentsOfSex.length;
  }
  return species.reduce((obj, specie) => {
    const object = obj;
    object[specie.name] = specie.residents.length;
    return obj;
  }, {});
};

module.exports = countAnimals;
