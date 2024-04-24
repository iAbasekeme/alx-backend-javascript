export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const idx of array) {
    // eslint-disable-next-line no-param-reassign
    const newValue = appendString + idx;
    const index = array.indexOf(idx);
    newArray[index] = newValue;
  }
  return array;
}
