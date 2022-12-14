function getSuits() {
    const suitObject = {};
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    const {suit, value} = card;
    if (suitObject[suit]) {
    const valueList = suitObject[suit];
    suitObject[suit] = [...valueList, value];
    } else {
    suitObject[suit] = [value];
    }
    }
    return suitObject;
    }
    console.log(getSuits());