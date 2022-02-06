const sum = (arg1: number, arg2: number) => arg1 + arg2;

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

export {};
