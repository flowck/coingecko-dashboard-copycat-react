import { isDataCached } from ".";

describe("utils", () => {
  it("Expects isDataCached to return a boolean", () => {
    expect(typeof isDataCached("cg.coins")).toBe("boolean");
  });

  it("Expects isDataCached to return false when key is not set", () => {
    expect(isDataCached("cg.coins")).toBe(false);
  });

  it("Expects isDataCached to throw an error when given an invalid argument", () => {
    expect(() => isDataCached(undefined as any)).toThrowError();
  });
});
