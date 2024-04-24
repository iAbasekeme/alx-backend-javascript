export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    // eslint-disable-next-line no-param-reassign
    const newValue = appendString + idx;
    const index = array.indexOf(idx);
    array[index] = newValue;
  }
  return array;
}
