function clearHistory() {
    if(confirm("All saved passwords will be lost. Are you sure you want to clear the session history?")){
        sessionStorage.clear();
        const history = document.getElementById("history");
        history.innerHTML = "";
        alert("Password history cleared successfully!");
    }
}
function generate() {
    let passwordSize = document.getElementById("passwordSize").value;
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    let selected = [];

    // Gather selected options from checkbox
    checkboxes.forEach((checkbox) => {
        selected.push(checkbox.value);
    });

    // Check if any options are selected
    if (selected.length === 0) {
        alert("Please select at least one character type to generate a password.");
        return; // Exit the function to prevent password generation
    }

    // Generate the configuration using the chosen values
    let config = createConfiguration(selected, passwordSize);

    // Find the div with the id "passwordContainer"
    const passwordContainer = document.getElementById("passwordContainer");
    // Overwrite its text with the value of the generated password
    passwordContainer.innerHTML = createPassword(config);

    // Clear the password history display to prevent duplicates
    const history = document.getElementById("history");
    history.innerHTML = "";

    // Add passwords stored in sessionStorage to the webpage
    getPasswordHistory().forEach((password) => {
        history.innerHTML += `<p>${password}</p>`;
    });
}
