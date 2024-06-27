const { getCarValue, removeSymbol, checkModel, calculateModelValue, checkYear } = require('../APIFunctions/getCarValue')

describe('getCarValue', () => {


  it('Sunny day scenario', () => {
    expect(getCarValue("Civic", 2020)).toBe(6620);
    expect(getCarValue("Task-Force", 1987)).toBe(11787);
  });

  it('Numbers only is ok', () => {
    expect(getCarValue("911", 2020)).toBe(2020);
  });

  it('Model input is ok', () => {
    expect(checkModel("C200")).toBe(false);
    expect(checkModel("911")).toBe(false);
    expect(checkModel("")).toBe(false);
    expect(checkModel("Task-Force")).toBe(true);
    expect(removeSymbol("Task-Force")).toBe("TaskForce");
    expect(removeSymbol("Task--+Force$+// ")).toBe("TaskForce");
    expect(calculateModelValue("taskforce")).toBe(98);
  });

  it('Negative year', () => {
    expect(getCarValue("Task-Force", -987)).toBe(false);
  });

  it('Valid year', () => {
    expect(checkYear(2020)).toBe(true);
    expect(checkYear("2020")).toBe(true);
    expect(checkYear(987)).toBe(false);
    expect(checkYear(9-87)).toBe(false);
    expect(checkYear("Twenty twenty")).toBe(false);
  });

  it('Wrong data type', () => {
    expect(getCarValue("C200", "twenty twenty")).toBe(false);
  });

});