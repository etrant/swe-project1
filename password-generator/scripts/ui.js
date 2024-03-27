// Reset to Default Settings functionality
function resetToDefaultSettings() {
     // Reset password size to 16
     document.getElementById("passwordSize").value = 16;
     document.querySelector('output[name="sizeValue"]').value = 16; // Update the displayed value next to the slider
 
     // Reset checkboxes: Check 'upper' and 'numbers', uncheck 'lower' and 'symbols'
     document.querySelector('input[value="upper"]').checked = true;
     document.querySelector('input[value="numbers"]').checked = true;
     document.querySelector('input[value="lower"]').checked = false;
     document.querySelector('input[value="symbols"]').checked = false;
}

// Event listener for the Reset button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("resetToDefaultsButton").addEventListener("click", resetToDefaultSettings);
});
