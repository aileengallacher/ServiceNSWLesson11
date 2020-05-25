// Dereferencing Exercises
// Make a dereferenced copy of the array below. (Hint: You will need to dereference each object in the array, not just the array itself)
//
let myPeople = [
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];
console.log(myPeople);

let lukeFromArr = myPeople.find(person => person.firstName == "Luke")
let luke = {
    firstName: lukeFromArr.firstName,
    lastName: lukeFromArr.lastName,
    age: lukeFromArr.age,
};
let rachelFromArr = myPeople.find(person => person.firstName == "Rachel")
let rachel = {
    firstName: rachelFromArr.firstName,
    lastName: rachelFromArr.lastName,
    age: rachelFromArr.age,
};
let douglasFromArr = myPeople.find(person => person.firstName == "Douglas")
let douglas = {
    firstName: douglasFromArr.firstName,
    lastName: douglasFromArr.lastName,
    age: douglasFromArr.age,
};
console.log(luke);
console.log(rachel);
console.log(douglas);


