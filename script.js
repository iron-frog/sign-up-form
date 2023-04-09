
const check_pass = document.querySelector("#check-pass");
const passw = document.querySelector("#passw");
const errorMsg = check_pass.nextElementSibling;

// errorMsg.textContent = "";
// console.log(errorMsg);

const chkPass = () => {
    if(check_pass.value !== passw.value){
        console.log("not match");
        check_pass.classList.add("error");
        // return;
    }
    else{
        check_pass.classList.remove("error");
    }
    console.log(check_pass.classList);
    console.log(passw.value);
    console.log(check_pass.value);
    
};

check_pass.addEventListener('input', chkPass)
passw.addEventListener('input', chkPass)
check_pass.addEventListener('click', chkPass)
