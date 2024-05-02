export default function cleanSet(set, startString) {
  let result = [];
  // Check if set is a Set instance and startString is a String instance
  if (!(set instanceof Set) || !(typeof startString === 'string') || startString.length === 0) {
    return '';
  }
  // Iterate over each value in the set
  for (const value of set) {
    // Check if the value starts with the startString
    if (value.startsWith(startString)) {
      // slice startstring length from value
      const sliceValue = value.slice(startString.length);
      result += `${sliceValue}-`;
    }
  }
  // Remove the last '-' character from the result string
  return result.slice(0, -1);
}
