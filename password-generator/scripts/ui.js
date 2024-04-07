// Reset to Default Settings functionality
function resetToDefaultSettings() {

     //reset password size to 16
     document.getElementById("passwordSize").value = 16;
     document.getElementById('characterCountBox').textContent = 16; // Update the character count box

     const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        if (checkbox.value === "upper" || checkbox.value === "numbers") {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
        // Reset custom styles for checkboxes
        if (checkbox.checked) {
            checkbox.style.backgroundColor = '#22223B';
            checkbox.style.border = '2px solid #fff';
        } else {
            checkbox.style.backgroundColor = '#fff';
            checkbox.style.border = '2px solid #22223B';
        };
    });
}

//event listener for the reset button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("resetToDefaultsButton").addEventListener("click", resetToDefaultSettings);

    document.getElementById("regenerateButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent any default action.
        event.stopPropagation(); // Stop the event from propagating further.
        generate(); // Call the generate function when the regenerate button is clicked.
        console.log('Regenerate button clicked'); // Debugging line to confirm button behavior.
    });
    
    document.getElementById('copyButton').addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the event from propagating further.
        const passwordText = document.getElementById('passwordContainer').innerText;
        navigator.clipboard.writeText(passwordText)
        .then(() => alert('Password copied to clipboard!'))
        .catch(err => console.error('Failed to copy text: ', err));
        console.log('Copy button clicked'); // Debugging line to confirm button behavior.
    });
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            // Add classes or styles when checked
            this.style.backgroundColor = '#22223B';
            this.style.border = '2px solid #fff'; // Example to show a "margin"
          } else {
            // Revert classes or styles when not checked
            this.style.backgroundColor = '#fff';
            this.style.border = '2px solid #22223B';
          }
        });
      });  
});


