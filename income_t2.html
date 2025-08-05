<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Income Tax Calculator Portal (2025-26)</title>
  <style>
    body, html { height: 100%; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
    .portal-bg { min-height: 100vh; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); display: flex; align-items: center; justify-content: center; }
    .portal-container { background: #fff; border-radius: 18px; box-shadow: 0 8px 32px rgba(42, 42, 114, 0.18); padding: 36px 32px 28px 32px; max-width: 540px; width: 100%; margin: 30px 10px; animation: fadeIn 1s; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    h1 { text-align: center; color: #0dbba7; margin-bottom: 10px; font-size: 2.1em; letter-spacing: 1px; }
    .year { color: #6a11cb; font-size: 0.7em; font-weight: 600; }
    form { margin-top: 18px; }
    .input-row { display: flex; flex-wrap: wrap; gap: 18px; margin-bottom: 12px; }
    label { flex: 1 1 180px; color: #2d3a4b; font-weight: 500; margin-bottom: 6px; }
    input[type="number"], select { width: 100%; padding: 7px 8px; border: 1px solid #bfc9d4; border-radius: 5px; margin-top: 3px; font-size: 1em; background: #f7faff; transition: border 0.2s; }
    input[type="number"]:focus, select:focus { border: 1.5px solid #2575fc; outline: none; }
    fieldset { border: 1.5px solid #6a11cb; border-radius: 8px; padding: 12px 18px 10px 18px; margin-bottom: 16px; background: #f7faff; }
    legend { color: #6a11cb; font-weight: bold; font-size: 1.1em; }
    .std-deduction-info { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 1em; }
    .std-deduction-info .old { color: #2575fc; font-weight: 600; }
    .std-deduction-info .new { color: #6a11cb; font-weight: 600; }
    button { width: 100%; padding: 12px; background: linear-gradient(90deg, #2575fc 0%, #6a11cb 100%); color: #fff; border: none; border-radius: 6px; font-size: 1.1em; font-weight: 600; margin-top: 10px; cursor: pointer; box-shadow: 0 2px 8px rgba(42, 42, 114, 0.08); transition: background 0.2s; }
    button:hover { background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%); }
    #result {
      margin-top: 22px;
      background: #eaf3ff;
      border-left: 5px solid #2575fc;
      padding: 18px 16px;
      border-radius: 8px;
      color: #1a2a3a;
      font-size: 1.1em;
      min-height: 40px;
      box-shadow: 0 1px 4px rgba(42, 42, 114, 0.06);
      position: relative;
      overflow: hidden;
    }
    .money-anim {
      position: absolute;
      left: 50%;
      top: 0;
      font-size: 2.2em;
      color: #0dbba7;
      animation: moneyDrop 1.2s cubic-bezier(.17,.67,.83,.67);
      pointer-events: none;
      z-index: 2;
    }
    @keyframes moneyDrop {
      0% { transform: translate(-50%, -60px) scale(0.7); opacity: 0; }
      40% { opacity: 1; }
      80% { transform: translate(-50%, 10px) scale(1.1); opacity: 1; }
      100% { transform: translate(-50%, 40px) scale(1); opacity: 0; }
    }
    .result-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .result-table th, .result-table td { padding: 7px 8px; text-align: right; }
    .result-table th { background: #dbeafe; color: #2575fc; }
    .result-table tr:nth-child(even) { background: #f7faff; }
    .result-table tr:nth-child(odd) { background: #eaf3ff; }
    .result-table td:first-child, .result-table th:first-child { text-align: left; }
    .final-tax { font-weight: bold; color: #6a11cb; }
    @media (max-width: 600px) { .portal-container { padding: 18px 6px 16px 6px; } .input-row { flex-direction: column; gap: 8px; } }
  </style>
</head>
<body>
  <div class="portal-bg">
    <div class="portal-container">
      <h1>Income Tax Calculator <span class="year">2025-26</span></h1>
      <form id="taxForm" onsubmit="event.preventDefault(); calculateTax();">
        <div class="input-row">
          <label>Annual Income (₹):<input type="number" id="income" required></label>
          <label>Age Group:
            <select id="ageGroup">
              <option value="<60">Below 60</option>
              <option value="60-80">60 - 80</option>
              <option value=">80">Above 80</option>
            </select>
          </label>
        </div>
        <fieldset>
          <legend>Deductions</legend>
          <div class="input-row">
            <label>80C (Max 1,50,000):<input type="number" id="ded80c" min="0"></label>
            <label>80D:<input type="number" id="ded80d" min="0"></label>
            <label>HRA:<input type="number" id="hra" min="0"></label>
            <label>NPS:<input type="number" id="nps" min="0"></label>
            <label>Other:<input type="number" id="otherded" min="0"></label>
          </div>
        </fieldset>
        <div class="std-deduction-info">
          <span class="old">Old Regime Std Deduction: ₹50,000</span>
          <span class="new">New Regime Std Deduction: ₹75,000</span>
        </div>
        <button type="submit">Calculate Tax</button>
      </form>
      <div id="result"></div>
    </div>
  </div>
  <script>
    function formatINR(num) {
      return '₹' + num.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2});
    }
    function showMoneyAnimation() {
      const resultDiv = document.getElementById('result');
      const anim = document.createElement('div');
      anim.className = 'money-anim';
      anim.innerHTML = '💸';
      resultDiv.appendChild(anim);
      setTimeout(() => { anim.remove(); }, 1200);
    }
    function calculateTax() {
      const income = parseFloat(document.getElementById('income').value) || 0;
      const ageGroup = document.getElementById('ageGroup').value;
      const ded80c = Math.min(parseFloat(document.getElementById('ded80c').value) || 0, 150000);
      const ded80d = parseFloat(document.getElementById('ded80d').value) || 0;
      const hra = parseFloat(document.getElementById('hra').value) || 0;
      const nps = parseFloat(document.getElementById('nps').value) || 0;
      const otherded = parseFloat(document.getElementById('otherded').value) || 0;

      // Standard deduction
      const stdDedOld = 50000;
      const stdDedNew = 75000;

      // Deductions for old regime
      let deductions = ded80c + ded80d + hra + otherded + nps + stdDedOld;
      let taxableOld = Math.max(0, income - deductions);
      let taxableNew = Math.max(0, income - stdDedNew); // Only standard deduction in new regime

      // Old regime slabs
      let basicExemption = 250000;
      if (ageGroup === '60-80') basicExemption = 300000;
      if (ageGroup === '>80') basicExemption = 500000;
      let taxOld = 0, rebateOld = 0, cessOld = 0;
      if (taxableOld > basicExemption && taxableOld <= 500000) taxOld = (taxableOld - basicExemption) * 0.05;
      else if (taxableOld > 500000 && taxableOld <= 1000000) taxOld = (500000 - basicExemption) * 0.05 + (taxableOld - 500000) * 0.2;
      else if (taxableOld > 1000000) taxOld = (500000 - basicExemption) * 0.05 + 500000 * 0.2 + (taxableOld - 1000000) * 0.3;
      // 87A rebate for income up to 5 lakh
      if (taxableOld <= 500000) rebateOld = Math.min(taxOld, 12500);
      taxOld = Math.max(0, taxOld - rebateOld);
      cessOld = taxOld * 0.04;
      let totalOld = taxOld + cessOld;

      // New regime slabs (FY 2025-26)
      let taxNew = 0, rebateNew = 0, cessNew = 0;
      if (income <= 1200000) {
        taxNew = 0;
        rebateNew = 0;
        cessNew = 0;
      } else {
        if (taxableNew > 300000 && taxableNew <= 600000) taxNew = (taxableNew - 300000) * 0.05;
        else if (taxableNew > 600000 && taxableNew <= 900000) taxNew = 300000 * 0.05 + (taxableNew - 600000) * 0.1;
        else if (taxableNew > 900000 && taxableNew <= 1200000) taxNew = 300000 * 0.05 + 300000 * 0.1 + (taxableNew - 900000) * 0.15;
        else if (taxableNew > 1200000 && taxableNew <= 1500000) taxNew = 300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + (taxableNew - 1200000) * 0.2;
        else if (taxableNew > 1500000) taxNew = 300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + 300000 * 0.2 + (taxableNew - 1500000) * 0.3;
        // 87A rebate for income up to 7 lakh
        if (taxableNew <= 700000) rebateNew = Math.min(taxNew, 25000);
        taxNew = Math.max(0, taxNew - rebateNew);
        cessNew = taxNew * 0.04;
      }
      let totalNew = taxNew + cessNew;

      const diff = totalOld - totalNew;
      document.getElementById('result').innerHTML = `
        <table class="result-table">
          <tr><th>Details</th><th>Old Regime</th><th>New Regime</th></tr>
          <tr><td>Gross Total Income</td><td>${formatINR(income)}</td><td>${formatINR(income)}</td></tr>
          <tr><td>Standard Deduction</td><td>${formatINR(stdDedOld)}</td><td>${formatINR(stdDedNew)}</td></tr>
          <tr><td>NPS</td><td>${formatINR(nps)}</td><td>₹0.00</td></tr>
          <tr><td>Other Deductions</td><td>${formatINR(ded80c + ded80d + hra + otherded)}</td><td>₹0.00</td></tr>
          <tr><td><b>Net Taxable Income</b></td><td>${formatINR(taxableOld)}</td><td>${formatINR(taxableNew)}</td></tr>
          <tr><td>Rebate u/s 87A</td><td>${formatINR(rebateOld)}</td><td>${formatINR(rebateNew)}</td></tr>
          <tr><td>Tax Before Cess</td><td>${formatINR(taxOld)}</td><td>${formatINR(taxNew)}</td></tr>
          <tr><td>Health & Education Cess (4%)</td><td>${formatINR(cessOld)}</td><td>${formatINR(cessNew)}</td></tr>
          <tr class="final-tax"><td>Final Tax Payable</td><td>${formatINR(totalOld)}</td><td>${formatINR(totalNew)}</td></tr>
        </table>
        <div style="margin-top:10px;"><b>Difference (Old - New):</b> ${formatINR(diff)}</div>
      `;
      showMoneyAnimation();
    }
  </script>
</body>
</html>
