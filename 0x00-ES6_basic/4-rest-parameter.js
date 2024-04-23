export default function returnHowManyArguments(...all) {
    let sum = 0;
    for (let i of all) {
        sum += 1;
    }
    return sum;
}
