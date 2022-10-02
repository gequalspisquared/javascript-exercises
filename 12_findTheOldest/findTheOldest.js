const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0;
    people.forEach(person => {
        let currentAge = getAge(person);
        if (currentAge > oldestAge) {
            oldestAge = currentAge;
            oldestPerson = person;
        } 
    })

    return oldestPerson;
};

const getAge = function(person) {
    if (person.yearOfDeath) return person.yearOfDeath - person.yearOfBirth;
    const yearOfDeath = new Date().getFullYear();
    return yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
