const findTheOldest = function(people) {
    people = people.map(person =>  person.yearOfDeath ? person : {
        name: person.name,
        yearOfBirth: person.yearOfBirth,
        yearOfDeath: (new Date()).getFullYear(),
    })
    return people.sort((a, b) => {
        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;
        return ageA > ageB ? -1 : 1;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
