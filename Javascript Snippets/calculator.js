function calculator (num1, num2) {
    return {
        add: function () {
            return num1 + num2;
        },
        subtract: function () {
            return num1 - num2;
        },
        multiply: function () {
            return num1 * num2;
        },
        divide: function () {
            return num1 / num2;
        }
    }
}
console.log(calculator(6, 9).add())