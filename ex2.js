function calculateSum(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "Dữ liệu không hợp lệ";
    } else {
        return a + b;
    }
}

function handleResult() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = calculateSum(num1, num2);
    document.getElementById('output').textContent = result;
}