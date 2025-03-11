function isPalindrome(str) {
    if (typeof str !== "string") {
        return "Dữ liệu không hợp lệ. Hãy nhập một chuỗi.";
    }

    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = normalizedStr.split("").reverse().join("");

    return normalizedStr === reversedStr
        ? `"${str}" là chuỗi đối xứng.`
        : `"${str}" không phải là chuỗi đối xứng.`;
}

function checkPalindrome() {
    const inputString = document.getElementById('stringInput').value.trim();
    const result = isPalindrome(inputString);
    document.getElementById('output').textContent = result;
}
