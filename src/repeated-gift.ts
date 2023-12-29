export default function findFirstRepeatedGift(gifts: number[]) {
    const pastGifts: number[] = [];
    for (const gift of gifts) {
        if (pastGifts.includes(gift)) return gift;
        pastGifts.push(gift);
    }
    return -1;
}
