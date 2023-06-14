const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((employee) =>
  employee.managers.find((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((person) => `${person.firstName} ${person.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
