var incomeTax = 13;
var contributions = 30;

function calculateExpences (netSalary) {
  var brutSalary = netSalary / (1 - incomeTax / 100);
  var companyCostsPerEmployeePerMonth = brutSalary + brutSalary * contributions / 100;
  return Math.round(companyCostsPerEmployeePerMonth);
}

calculateExpences(100000);
console.log("calculateExpences(100000)", calculateExpences(100000));