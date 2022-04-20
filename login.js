const form2 = document.getElementById('form2');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');



form2.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs2();
});

function checkInputs2() {
	// trim to remove the whitespaces
	
	const email2Value = email2.value.trim();
	const password2Value = password2.value.trim();
	
	
	
	if(email2Value === '') {
		setErrorFor(email2, 'Email cannot be blank');
	} else if (!isEmail(email2Value)) {
		setErrorFor(email2, 'Not a valid email');
	} else {
		setSuccessFor(email2);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else {
		setSuccessFor(password2);
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
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



