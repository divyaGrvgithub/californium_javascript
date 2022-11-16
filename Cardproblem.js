const cardData = [
    {
    suit: "heart",
    value: 7,
    },
    {
    suit: "club",
    value: 8,
    },
    {
    suit: "club",
    value: 2,
    },
    {
    suit: "diamond",
    value: 2,
    },
    {
    suit: "diamond",
    value: 5,
    },
    {
    suit: "club",
    value: 10,
    },
    ];
    // =========================================== 1
    ==================================================== //
    function findCard(value, suit) {
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    if (card.suit === suit && card.value === value) {
    return true;
    }
    }
    return false;
    }
    // console.log(findCard(10, "club"))
    // =========================================== 2
    ==================================================== //
    function getSuitsList() {
    const suitObject = {};
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    const {suit} = card;
    // this will make sure that duplicates are removed
    suitObject[suit] = 1;
    }
    return Object.keys(suitObject);
    }
    // console.log(getSuitsList());
    // =========================================== 3
    ==================================================== //
    function getSuitsNumber() {
    const suitObject = {};
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    const {suit} = card;
    if (suitObject[suit]) {
    suitObject[suit] = suitObject[suit] + 1;
    } else {
    suitObject[suit] = 1;
    }
    }
    return suitObject;
    }
    // console.log(getSuitsNumber());
    // =========================================== 4
    ==================================================== //
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
    // console.log(getSuits());