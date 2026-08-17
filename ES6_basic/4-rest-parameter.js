export default function returnHowManyArguments(...rest) {
    let total = 0
    for (const arg of rest) {
        total += 1
    }
    return total
}