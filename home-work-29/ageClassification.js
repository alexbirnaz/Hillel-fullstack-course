function ageClassification(num) {
  if (num < 0) return null;
  if (num <= 24) return "Childhood";
  if (num <= 44) return "Youth";
  if (num <= 65) return "Maturity";
  if (num <= 75) return "Old age";
  if (num <= 90) return "Longevity";
  if (num <= 122) return "Record";
  return "Impossible";
}

module.exports = ageClassification;
