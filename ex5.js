function countPositiveIntegers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ. Hãy nhập một mảng.";
    }

    const positiveIntegers = arr.filter(
        item => Number.isInteger(item) && item > 0
    );

    if (positiveIntegers.length === 0) {
        return "Không có số nguyên dương trong mảng.";
    } else {
        return `Có ${positiveIntegers.length} số nguyên dương trong mảng.`;
    }
}

function countPositiveNumbers() {
    try {
        const inputArray = JSON.parse(document.getElementById('arrayInput').value);
        const result = countPositiveIntegers(inputArray);
        document.getElementById('output').textContent = result;
    } catch (error) {
        document.getElementById('output').textContent = "Dữ liệu nhập không hợp lệ. Hãy nhập một mảng JSON hợp lệ.";
    }
}
