export default function returnHowManyArguments(...all) {
  let i = 0;
  for (i of all) {
    i += 1;
  }
  return i;
}
