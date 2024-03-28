// Reset to Default Settings functionality
function resetToDefaultSettings() {

     //reset password size to 16
     document.getElementById("passwordSize").value = 16;
     document.querySelector('output[name="sizeValue"]').value = 16;
 
     //reset checkboxes
     document.querySelector('input[value="upper"]').checked = true;
     document.querySelector('input[value="numbers"]').checked = true;
     document.querySelector('input[value="lower"]').checked = false;
     document.querySelector('input[value="symbols"]').checked = false;
}

//event listener for the reset button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("resetToDefaultsButton").addEventListener("click", resetToDefaultSettings);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("regenerateButton").addEventListener("click", function() {
        generate(); // Call the generate function when the regenerate button is clicked
    });
});