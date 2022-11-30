const personCopy = {
    ...person,
    address: {
        ...person.address,
        emails: [...person.address.emails],
    },
};

personCopy.name = "Rahul";
personCopy.address.pincode = "4567";
personCopy.address.emails[0] = "asd@outlook.com";




/**
 * 
 * primitive
 * they are copied by value when we use assign operator (=)
 * they are equated by value when we use equality operator (==, ===)
 * 
 * 
 * non primitive
 * they are copied by reference when we use assign operator (=)
 * they are equated by reference when we use equality operator (==, ===)
 * 
 * 
 */