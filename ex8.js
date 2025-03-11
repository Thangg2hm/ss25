function isStrongPassword(password) {
    if (typeof password !== "string") {
        return "Dữ liệu không hợp lệ. Vui lòng nhập mật khẩu là một chuỗi.";
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    return isLongEnough && hasUpperCase && hasLowerCase && hasNumber;
}

function checkPasswordStrength() {
    const password = document.getElementById("passwordInput").value.trim();
    const isStrong = isStrongPassword(password);
    const result = isStrong
        ? `"${password}" là một mật khẩu mạnh.`
        : `"${password}" không phải là một mật khẩu mạnh. Hãy kiểm tra lại.`;
    document.getElementById("output").textContent = result;
}
