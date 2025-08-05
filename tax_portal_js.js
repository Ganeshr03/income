function calculateTax() {
  const income = parseFloat(document.getElementById('income').value) || 0;
  const ageGroup = document.getElementById('ageGroup').value;
  const ded80c = Math.min(parseFloat(document.getElementById('ded80c').value) || 0, 150000);
  const ded80d = parseFloat(document.getElementById('ded80d').value) || 0;
  const hra = parseFloat(document.getElementById('hra').value) || 0;
  const otherded = parseFloat(document.getElementById('otherded').value) || 0;

  // Standard deduction
  const stdDedOld = 50000;
  const stdDedNew = 75000;

  // Deductions for old regime
  let deductions = ded80c + ded80d + hra + otherded + stdDedOld;
  let taxableOld = Math.max(0, income - deductions);
  let taxableNew = Math.max(0, income - stdDedNew); // Only standard deduction in new regime

  // Old regime slabs
  let basicExemption = 250000;
  if (ageGroup === '60-80') basicExemption = 300000;
  if (ageGroup === '>80') basicExemption = 500000;
  let taxOld = 0;
  if (taxableOld > basicExemption && taxableOld <= 500000) taxOld = (taxableOld - basicExemption) * 0.05;
  else if (taxableOld > 500000 && taxableOld <= 1000000) taxOld = (500000 - basicExemption) * 0.05 + (taxableOld - 500000) * 0.2;
  else if (taxableOld > 1000000) taxOld = (500000 - basicExemption) * 0.05 + 500000 * 0.2 + (taxableOld - 1000000) * 0.3;
  // 87A rebate for income up to 5 lakh
  if (taxableOld <= 500000) taxOld = Math.max(0, taxOld - Math.min(taxOld, 12500));

  // New regime slabs (FY 2025-26)
  let taxNew = 0;
  if (taxableNew > 300000 && taxableNew <= 600000) taxNew = (taxableNew - 300000) * 0.05;
  else if (taxableNew > 600000 && taxableNew <= 900000) taxNew = 300000 * 0.05 + (taxableNew - 600000) * 0.1;
  else if (taxableNew > 900000 && taxableNew <= 1200000) taxNew = 300000 * 0.05 + 300000 * 0.1 + (taxableNew - 900000) * 0.15;
  else if (taxableNew > 1200000 && taxableNew <= 1500000) taxNew = 300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + (taxableNew - 1200000) * 0.2;
  else if (taxableNew > 1500000) taxNew = 300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + 300000 * 0.2 + (taxableNew - 1500000) * 0.3;
  // 87A rebate for income up to 7 lakh
  if (taxableNew <= 700000) taxNew = Math.max(0, taxNew - Math.min(taxNew, 25000));

  const diff = taxOld - taxNew;
  document.getElementById('result').innerHTML =
    `<b>Old Regime Tax:</b> ₹${taxOld.toLocaleString('en-IN', {minimumFractionDigits:2})}<br>` +
    `<b>New Regime Tax:</b> ₹${taxNew.toLocaleString('en-IN', {minimumFractionDigits:2})}<br>` +
    `<b>Difference:</b> ₹${diff.toLocaleString('en-IN', {minimumFractionDigits:2})}`;
}
