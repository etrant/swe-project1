 function clearHistory() {
        sessionStorage.clear();
        const history = document.getElementById("history");
        history.innerHTML = "";
      }

function generate() {
    let passwordSize = document.getElementById("passwordSize").value;
    // Gather selected options from checkbox
    let selected = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        selected.push(checkboxes[i].value)
    }

    // Generate the configuration using the chosen values
    let config = createConfiguration(selected, passwordSize);

    // Find the div with the id "main"
    const passwordContainer = document.getElementById("passwordContainer");
    // Overwrite it's text with the value of the generated password
    passwordContainer.innerHTML = createPassword(config);

    // Find the div with the id "history" and clear it (prevents duplicates)
    const history = document.getElementById("history");
    history.innerHTML = "";

    // Add passwords stored in sessionStorage to the webpage.
    getPasswordHistory().forEach((password) => {
        history.innerHTML += `<p>${password}</p>`;
    });
}