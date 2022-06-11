const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  };
  return person
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const result = people.map(person => person.age);
  return result;
};

const findByName = (name, people) => {
  return people.find(obj => obj.name === name);
};

const findHondas = cars => {
  return cars.filter(obj => obj.manufacturer === 'Honda');
};

const averageAge = people => {
 
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: function(person) {
      return `Hi ${person}, my name is ${this.name} and I am ${this.age}!`}
    }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
