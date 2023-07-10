let userNum1 = document.getElementById('userNum1')
let userNum2 = document.getElementById('userNum2')
let operator = document.getElementById('operator')
let caculateButton = document.getElementById('calculate')
let resultDiv = document.getElementById('result')

caculateButton.addEventListener('click', function() {
let num1 = Number(userNum1.value)
let num2 = Number(userNum2.value)
let op = operator.value
let result

switch (op) {
    case '+':
            result = num1 + num2
        break
    case '-':
            result = num1 - num2
        break
    case '*':
            result = num1 * num2
        break
    case '/':
            result = num1 / num2
        break

    default:
            result = 'Operação inválida'
}

resultDiv.innerHTML = 'O resultador é ' + result
});