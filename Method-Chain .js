const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon",
    },
];

// return the full names of the facebook users who belong to guragon

// ================ method 1 (without chain) =============== //

function filterNonGuragonPeople(person) {
    if (person.location === "gurgaon") {
        return true;
    } else {
        return false;
    }
}

const gurgaonPeople = facebookProfiles.filter(filterNonGuragonPeople);

function getFirstName(person) {
    return person.firstName;
}

const gurgaonPeopleName = gurgaonPeople.map(getFirstName);
console.log(gurgaonPeopleName);

// ================ method 1 (with chain) =============== //

const gurgaonPeopleNameAfterChain = facebookProfiles
    .filter(filterNonGuragonPeople)
    .map(getFirstName);
console.log(gurgaonPeopleNameAfterChain);







// ========================================================================================== //



/**
 * Ans : code will not run because return value of push method is a number.
 * so we are doing number.filter()
 * and this will not work, because filter method take array as an argument (via hidden door) 
 * and not the number
 *
 * 
 * 
 * Ans 3. use concat instead of push to return the array. now that array will become the input to 
 * filter function
 */