import taskBlock from "../1-block-scoped";

test("variables inside taskBlock are not overwritten inside conditional block", () => {
    const rslt = taskBlock(true);
    expect(rslt).toEqual([false, true]);

    const rslt1 = taskBlock(false);
    expect(rslt1).toEqual([false,true]);
})
