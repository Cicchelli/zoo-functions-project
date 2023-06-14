const data = require('../data/zoo_data');

const countAnimals = (animals) => {
  
};
// const objetoQtdAnimais = data.species.reduce((acc, specie) => {
//   acc[specie.name] = data.specie.residents.length;
//   return acc;
// }, 0);
// return objetoQtdAnimais;
console.log(countAnimals());

// const qtdAnimaisResidentes = (animal) =>
//   data.species.reduce(
//     (sum, spec) => (spec.name === animal.specie ? spec.residents : sum),
//     0,
//   ).length;

// const qtdAnimaisSexo = (animal) => {
//   const filtroAnimais = data.species.find(
//     (specie) => specie.name === animal.specie,
//   ).residents;
//   const animals = filtroAnimais.reduce(
//     (acc, sexo) => (sexo.sex === animal.sex ? acc + 1 : acc),
//     0,
//   );
//   return animals;
// };

// function countAnimals(animal) {
//   if (animal === undefined) {
//     return objetoQtdAnimais;
//   }
//   if (Object.values(animal).length === 1) {
//     return qtdAnimaisResidentes(animal);
//   }
//   return qtdAnimaisSexo(animal);
// }

module.exports = countAnimals;
