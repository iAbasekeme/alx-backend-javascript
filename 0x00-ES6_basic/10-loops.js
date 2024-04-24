export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    const newValue = appendString + idx;
    newArray.push(newValue);
  }
  return newArray;
}
