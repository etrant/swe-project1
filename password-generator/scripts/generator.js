
let config = createConfiguration();

function createConfiguration(selectedOptions = ["upper","numbers"], passwordSize = 16){
    let lowercase_charset = "abcdefghijklmnopqrstuvwxyz";
    let uppercase_charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeric_charset = "0123456789";
    let symbols_charset = "@!$#&*";
    
    let options = {
        "lower": lowercase_charset,
        "upper": uppercase_charset,
        "numbers": numeric_charset,
        "symbols": symbols_charset
    };

    let charset = "";

    for(let i = 0; i < selectedOptions.length; i++){
        if (selectedOptions[i] in options) {
            let selection = options[selectedOptions[i]];
            charset = charset.concat(selection);
        }
    }

    let charsetSize = charset.length;

    return {charset,charsetSize,selectedOptions,passwordSize};
}


function createPassword(configuration) {
    let password = "";
    for (let i = 0; i < configuration.passwordSize; i++) {
        
        password += configuration.charset.charAt(Math.floor(Math.random() * configuration.charsetSize));
    }
    if (password.length >= 4){
        addToPasswordHistory(password);
    }
    return password;
}


function addToPasswordHistory(password){
    let password_list = [password];
    if (sessionStorage.getItem("password_list") === null) {
        sessionStorage.setItem("password_list", JSON.stringify(password_list));
    }
    else {
        let old_list = getPasswordHistory();
        let new_list = JSON.stringify(password_list.concat(old_list));
        sessionStorage.setItem("password_list", new_list);
    }
}


function getPasswordHistory(){
    return JSON.parse(sessionStorage.getItem("password_list"));
}