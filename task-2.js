function makeArray(firstArray, secondArray, maxLength) {
  let newArray = [...firstArray, ...secondArray];

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
}