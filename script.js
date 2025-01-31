document.getElementById("check-btn").addEventListener("click", validatePhone);
document.getElementById("clear-btn").addEventListener("click", clearInput);

function validatePhone() {
    const phoneInput = document.getElementById("user-input").value.trim();
    const resultDiv = document.getElementById("results-div");

    if (!phoneInput) {
        alert("Please provide a phone number");
        return;
    }

    const validUSNumberPatterns = [
        /^1?\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/,        // 1 555-555-5555, 555-555-5555
        /^1?\s?\(\d{3}\)\s?\d{3}[-.\s]?\d{4}$/,       // 1 (555) 555-5555, (555)555-5555
        /^1?\s?\d{3}\s\d{3}\s\d{4}$/,                // 1 555 555 5555
        /^1?\(\d{3}\)\d{3}[-.\s]?\d{4}$/             // 1(555)555-5555
    ];

    const isValid = validUSNumberPatterns.some(pattern => pattern.test(phoneInput));

    if (isValid) {
        resultDiv.textContent = `Valid US number: ${phoneInput}`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Invalid US number: ${phoneInput}`;
        resultDiv.style.color = "red";
    }
}

function clearInput() {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").textContent = "";
}