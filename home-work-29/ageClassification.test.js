const ageClassification = require("./ageClassification");

describe("ageClassification", () => {
  // Negative numbers
  test("returns null for negative numbers", () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(-100)).toBe(null);
  });

  // Childhood (0-24)
  test("returns 'Childhood' for ages 0-24", () => {
    expect(ageClassification(0)).toBe("Childhood");
    expect(ageClassification(10)).toBe("Childhood");
    expect(ageClassification(24)).toBe("Childhood");
  });

  // Youth (25-44)
  test("returns 'Youth' for ages 25-44", () => {
    expect(ageClassification(25)).toBe("Youth");
    expect(ageClassification(30)).toBe("Youth");
    expect(ageClassification(44)).toBe("Youth");
  });

  // Maturity (45-65)
  test("returns 'Maturity' for ages 45-65", () => {
    expect(ageClassification(45)).toBe("Maturity");
    expect(ageClassification(55)).toBe("Maturity");
    expect(ageClassification(65)).toBe("Maturity");
  });

  // Old age (66-75)
  test("returns 'Old age' for ages 66-75", () => {
    expect(ageClassification(66)).toBe("Old age");
    expect(ageClassification(70)).toBe("Old age");
    expect(ageClassification(75)).toBe("Old age");
  });

  // Longevity (76-90)
  test("returns 'Longevity' for ages 76-90", () => {
    expect(ageClassification(76)).toBe("Longevity");
    expect(ageClassification(85)).toBe("Longevity");
    expect(ageClassification(90)).toBe("Longevity");
  });

  // Record (91-122)
  test("returns 'Record' for ages 91-122", () => {
    expect(ageClassification(91)).toBe("Record");
    expect(ageClassification(100)).toBe("Record");
    expect(ageClassification(122)).toBe("Record");
  });

  // Impossible (>122)
  test("returns 'Impossible' for ages over 122", () => {
    expect(ageClassification(123)).toBe("Impossible");
    expect(ageClassification(200)).toBe("Impossible");
  });
});
