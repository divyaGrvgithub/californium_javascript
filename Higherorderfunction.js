//
========================================================================
//
// problem 1 , method 1
function outerFun(array) {
function innerFunc(innerElem) {
return innerElem + 1;
}
const innerArray = array.map(innerFunc);
return innerArray;
}
const result = arr.map(outerFun);
// problem 1 , method 2
const incrementedArray = practiceData.map((outerArray) =>
outerArray.map(innerElement => innerElement + 1)
);
console.log(incrementedArray);
// problem 2
const evenArray = practiceData.map((outerArray) =>
outerArray.filter(innerElement => innerElement % 2 === 0)
);
console.log(evenArray);
//
========================================================================
//
const answer = array.map((element, index) => index % 2 === 0 ? element * 10 : element * 2);
//
========================================================================
//
const carObject = {};
carBrands.forEach((brand, index) => {
carObject[brand] = carModel[index];
});
console.log(carObject);
//
========================================================================
//
arr.reduce((acc, curr) => {
acc = [...acc, ...curr]
return acc
}, [])
//
========================================================================
//
const capitals = countries.map(item => item.toUpperCase())
//
========================================================================
//