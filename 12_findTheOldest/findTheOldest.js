const findTheOldest = function(people) {
    // Date.now() gets the ms since 1970-01-01. The divisor converts it to the years since 1970-01-01. 
    // Adding 1970 creates current year
    let currentYear = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 365) + 1970);

    let ages = people.map((person) => {
        if (!("yearOfDeath" in person)) {
            return currentYear - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth;
    });

    let oldestAgeIndex = ages.indexOf(Math.max(...ages));
    return people[oldestAgeIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
