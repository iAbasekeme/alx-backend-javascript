export default function appendToEachArrayValue(array, appendString) {
  if (array) {
    // eslint-disable-next-line guard-for-in
    for (const idx in array) {
      const value = array[idx];
      // eslint-disable-next-line no-param-reassign
      array[idx] = appendString + value;
    }
  }
  return array;
}
