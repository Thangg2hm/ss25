function findSmallest(arr) {
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ";
    } else if (arr.length === 0) {
        return "Mảng không chứa phần tử";
    } else {
        return `Phần tử nhỏ nhất trong mảng là ${Math.min(...arr)}`;
    }
}

function handleResult() {
    try {
        const inputArray = JSON.parse(document.getElementById('arrayInput').value);
        const result = findSmallest(inputArray);
        document.getElementById('output').textContent = result;
    } catch (error) {
        document.getElementById('output').textContent = "Dữ liệu nhập vào không hợp lệ. Hãy nhập một mảng JSON hợp lệ.";
    }
}
