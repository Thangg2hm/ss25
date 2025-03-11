function capitalizeWords(str) {
    if (typeof str !== "string") {
        return "Dữ liệu không hợp lệ. Hãy nhập một chuỗi.";
    }

    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function capitalizeFirstLetters() {
    const input = document.getElementById("inputString").value.trim();
    const result = capitalizeWords(input);
    document.getElementById("output").textContent = result;
}
