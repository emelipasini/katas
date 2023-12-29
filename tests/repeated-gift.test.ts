import findFirstRepeatedGift from "../src/repeated-gift";

describe("First repeated gift finder", () => {
    it("should return -1 if there are no repeated numbers", () => {
        const result = findFirstRepeatedGift([1, 2, 3]);

        expect(result).toBe(-1);
    });

    it("should return the repeated number", () => {
        const result = findFirstRepeatedGift([1, 2, 3, 2]);

        expect(result).toBe(2);
    });
});
