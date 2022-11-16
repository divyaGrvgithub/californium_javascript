const places = ["delhi", "gurgaon", "jaipur", "pune"];
const morePlaces = ["kochi", "hyderabad", "Shimla", "Srinagar"];

// ============================================================================= //

// remove first element from places array and print the remaining array using destructuring and rest
//result = ['gurgaon', 'jaipur', 'pune']
const [firstElem, ...restOfThePlace] = places;
console.log(restOfThePlace);

// ============================================================================= //

// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
const updatedNewPlacesArray = [firstElem, ...morePlaces];
console.log(updatedNewPlacesArray);

// ============================================================================= //

// take out last three element from the morePlacesArray and take out first three elements from the places array and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
const [placeOne, placeTwo, placeThree] = places;
const [first, ...remainingElements] = morePlaces;
const updatedArr = [...remainingElements, placeOne, placeTwo, placeThree];
console.log(updatedArr);

// ============================================================================= //





const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
        pinCode: 123455,
        city: "delhi",
    },
    likes: ["music", "movies"],
};


// destructure and store pincode into a vaiable named myPincode

const {
    address: { pinCode: myPincode },//it will store mypincode into address keystrin


// ============================================================================= //

// destructure and store second like into a vaiable named myLike

const {
    likes: [one, myLike],// it will store second like into variable which named mylike
} = myData;

