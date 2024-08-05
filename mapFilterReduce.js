// this array of object is given, we have to filter it with the age

const people = [
    { firstname: 'Alice', age: 30 },
    { firstname: 'Bob', age: 25 },
    { firstname: 'Charlie', age: 35 },
    { firstname: 'Diana', age: 28 },
    { firstname: 'Ethan', age: 32 }
  ];

const aged = people.filter(function filter(check) {
    if (check.age > 30) 
    {
        return check;
    }
})
console.log(aged);

const agedd = people.filter((check) => {
    if (check.age > 30) 
    {
        return check;
    }
})
console.log(agedd);