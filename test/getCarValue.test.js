const { getCarValue, removeSymbol, checkModel, 
        calculateModelValue, checkYear, checkPossibleCarYear} 
        = require('../APIFunctions/getCarValue')

describe('getCarValue', () => {


  it('Should be a sunny day scenario', () => {
    expect(getCarValue("Civic", 2020)).toBe(6620);
    expect(getCarValue("Task-Force", 1987)).toBe(11787);
  });

  it('Should be only the year value is ok', () => {
    expect(getCarValue("911", 2020)).toBe(2020);
    expect(getCarValue("C200", 2020)).toBe(2020);
    expect(getCarValue("+=*/", 2020)).toBe(2020);
  });

  it('Should be the model input is ok', () => {
    expect(checkModel("C200")).toBe(false);
    expect(checkModel("911")).toBe(false);
    expect(checkModel("")).toBe(false);
    expect(checkModel("Task-Force")).toBe(true);
    expect(checkModel(123)).toBe(false);
    expect(removeSymbol("Task-Force")).toBe("TaskForce");
    expect(removeSymbol("Task--+Force$+// ")).toBe("TaskForce");
    expect(calculateModelValue("taskforce")).toBe(98);
  });

  it('Should test if the user input a possible year', () => {
    expect(checkPossibleCarYear(-987)).toBe(false);
    expect(checkPossibleCarYear("-987")).toBe(false);
    expect(checkPossibleCarYear(1969)).toBe(true);
    expect(checkPossibleCarYear("1969")).toBe(true);
    expect(checkPossibleCarYear(1950)).toBe(false);
  });

  it('Should test if the user input a valid year', () => {
    expect(checkYear(2020)).toBe(true);
    expect(checkYear("2020")).toBe(true);
    expect(checkYear(987)).toBe(false);
    expect(checkYear(9-87)).toBe(false);
    expect(checkYear("9-87")).toBe(false);
    expect(checkYear(1950)).toBe(false);
    expect(checkYear("1950s")).toBe(false);
    expect(checkYear(1969)).toBe(true);
    expect(checkYear("Twenty twenty")).toBe(false);
  });

  it('Should be a false input data type', () => {
    expect(getCarValue("C200", "twenty twenty")).toBe(false);
  });

});