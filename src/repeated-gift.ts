export default function findFirstRepeatedGift(gifts: number[]) {
    const pastNumbers: number[] = [];
    for (const gift of gifts) {
        if (pastNumbers.includes(gift)) {
            return gift;
        } else {
            pastNumbers.push(gift);
        }
    }
    return -1;
}
