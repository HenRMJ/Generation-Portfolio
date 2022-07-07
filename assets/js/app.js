const prependToString = (stringOne, stringTwo) => {
    let returnValue = "";

    returnValue += stringTwo;
    returnValue += stringOne;

    return returnValue;
}

console.log(prependToString("fun", "boring"));

const characterAt = (string, num) => {
    if (num > string.length - 1) { return '' }

    return string[num];
}

console.log(characterAt("happy", 0));

console.log(prependToString(characterAt("hello", 0), characterAt("hello", 1)))