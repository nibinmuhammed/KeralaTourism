const form3 = document.getElementById('form3');
const name3 = document.getElementById('name3');
const phone3 = document.getElementById('phone3');
const email3 = document.getElementById('email3');
const password3 = document.getElementById('password3');
const cpassword3 = document.getElementById('cpassword3');

form3.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs3();
});

function checkInputs3() {
	// trim to remove the whitespaces
	const name3Value = name3.value.trim();
    const phone3Value = phone3.value.trim();
	const email3Value = email3.value.trim();
	const password3Value = password3.value.trim();
	const cpassword3Value = cpassword3.value.trim();
	
	if(name3Value === '') {
		setErrorFor(name3, 'Username cannot be blank');
	} else {
		setSuccessFor(name3);
	}

    if(phone3Value === '') {
		setErrorFor(phone3, 'number cannot be blank');
	} else if (!isPhone(phone3Value)) {
		setErrorFor(phone3, 'Invalid phone number');
	} else {
		setSuccessFor(phone3);
	}
	
	if(email3Value === '') {
		setErrorFor(email3, 'Email cannot be blank');
	} else if (!isEmail(email3Value)) {
		setErrorFor(email3, 'Not a valid email');
	} else {
		setSuccessFor(email3);
	}
	
	if(password3Value === '') {
		setErrorFor(password3, 'Password cannot be blank');
	} 
	else if(password3.value.length < 8) {
		setErrorFor(password3, 'atleast 8 charcters required');
	}
	else if(!isPassword(password3)) {
		setErrorFor(password3, 'atleast 1 uppercase 1 lowercase 1 number required');
	}
	else {
		setSuccessFor(password3);
	}
	
	if(cpassword3Value === '') {
		setErrorFor(cpassword3, 'Password cannot be blank');
	} else if(cpassword3Value !== password3Value) {
		setErrorFor(cpassword3, 'Passwords does not match');
	} else{
		setSuccessFor(cpassword3);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email3) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email3);
}

function isPhone(phone3) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone3)
}

function isPassword(password3) {
	return /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password3)
}


//password strength//




let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
}
let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker(){
    let password3 = document.getElementById("password3").value;

    parameters.letters = (/[A-Za-z]+/.test(password3))?true:false;
    parameters.numbers = (/[0-9]+/.test(password3))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password3))?true:false;
    parameters.count = (password3.length > 8)?true:false;

    let barLength = Object.values(parameters).filter(value=>value);

    console.log(Object.values(parameters), barLength);

    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");
    for( let i = 0; i < spanRef.length; i++){
        switch(spanRef.length - 1){
            case 0 :
                spanRef[i].style.background = "#ff3e36";
                msg.textContent = "Your password is very weak";
                break;
            case 1:
                spanRef[i].style.background = "#ff691f";
                msg.textContent = "Your password is weak";
                break;
            case 2:
                spanRef[i].style.background = "#ffda36";
                msg.textContent = "Your password is good";
                break;
            case 3:
                spanRef[i].style.background = "#0be881";
                msg.textContent = "Your password is strong";
                break;
        }
    }
}


