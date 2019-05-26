const taxCalc = annualSalary => {
  tier1 = 50000000;
  tier2 = 250000000;
  tier3 = 500000000;

  if (annualSalary <= tier1 && annualSalary !== 0) {
    return (tax = 0.05 * annualSalary);
  } else if (annualSalary > tier1 && annualSalary <= tier2) {
    return (tax = 0.05 * tier1 + (annualSalary - tier1) * 0.15);
  } else if (annualSalary > tier2 && annualSalary <= tier3) {
    return (tax =
      0.05 * tier1 + (tier2 - tier1) * 0.15 + (annualSalary - tier2) * 0.25);
  } else if (annualSalary > tier3) {
    return (tax =
      0.05 * tier1 +
      (tier2 - tier1) * 0.15 +
      tier2 * 0.25 +
      (annualSalary - tier3) * 0.3);
  } else {
    return "Invalid Input";
  }
};

module.exports = taxCalc;
