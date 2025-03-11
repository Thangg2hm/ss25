function findEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    } else if (arr.length === 0 || arr.every(num => num % 2 !== 0)) {
        return "Mảng không chứa số chẵn";
    } else {
        return `Các số chẵn trong mảng là: ${arr.filter(num => num % 2 === 0).join(", ")}`;
    }
}

function handleEvenNumbers() {
    try {
        const inputArray = JSON.parse(document.getElementById('arrayInput').value);
        const result = findEvenNumbers(inputArray);
        document.getElementById('output').textContent = result;
    } catch (error) {
        document.getElementById('output').textContent = "Dữ liệu nhập vào không hợp lệ. Hãy nhập một mảng JSON hợp lệ.";
    }
}
