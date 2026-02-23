const getWeekDay = require("./getWeekDay");

describe("getWeekDay", () => {
  // Valid days
  test("returns 'Monday' for 1", () => {
    expect(getWeekDay(1)).toBe("Monday");
  });

  test("returns 'Tuesday' for 2", () => {
    expect(getWeekDay(2)).toBe("Tuesday");
  });

  test("returns 'Wednesday' for 3", () => {
    expect(getWeekDay(3)).toBe("Wednesday");
  });

  test("returns 'Thursday' for 4", () => {
    expect(getWeekDay(4)).toBe("Thursday");
  });

  test("returns 'Friday' for 5", () => {
    expect(getWeekDay(5)).toBe("Friday");
  });

  test("returns 'Saturday' for 6", () => {
    expect(getWeekDay(6)).toBe("Saturday");
  });

  test("returns 'Sunday' for 7", () => {
    expect(getWeekDay(7)).toBe("Sunday");
  });

  // Invalid values
  test("returns null for 0", () => {
    expect(getWeekDay(0)).toBe(null);
  });

  test("returns null for 8", () => {
    expect(getWeekDay(8)).toBe(null);
  });

  test("returns null for negative numbers", () => {
    expect(getWeekDay(-1)).toBe(null);
  });

  test("returns null for non-integer", () => {
    expect(getWeekDay(1.5)).toBe(null);
  });
});
