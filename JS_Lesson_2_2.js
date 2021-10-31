var employeeSalaries = {
    Ivan: 5500,
    Stepan: 6000,
    Vasyl: 5700,
    Bohdan: 5500,
    Taras: 5000,
    Pavlo: 5000
};

var sum = 0;
for (var key in employeeSalaries) {
sum += employeeSalaries[key];
}

console.log("Сума заробітної плати: " + sum);