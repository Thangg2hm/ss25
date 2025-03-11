function isPrimeNumber(num) {
    if (!Number.isInteger(num) || num <= 0) {
        return "Dữ liệu không hợp lệ";
    }
    if (num === 1) {
        return "1 không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return `${num} không phải là số nguyên tố`;
        }
    }
    return `${num} là số nguyên tố`;
}

function checkPrimeNumber() {
    const input = parseInt(document.getElementById('numberInput').value, 10);
    const result = isPrimeNumber(input);
    document.getElementById('output').textContent = result;
}
