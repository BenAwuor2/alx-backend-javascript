import getSumOfHoods from "../3-default-parameter";
test("adds numbers", () => {
    const initialNumber=0;
    const sum = getSumOfHoods(initialNumber, 1, 2)
    expect(sum).toBe(3)
})