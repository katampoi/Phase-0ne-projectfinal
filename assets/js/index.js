//fetch(url,options);(option contains headers,methods,Body)
const form = document.querySelector("#form");

const firstNAMEREQUIRED = "Please enter your name";
const lastNAMEREQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
form.addEventListener("submit", function (event) {
    const fname = event.target.fname.value
    const lName = event.target.lname.value
    const email = event.target.email.value
    const message = event.target.message.value

	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
    //form.submit()
    const myFormData = new FormData(event.target);

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
});
const element = document.getElementById("home");
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "WELCOME Aboard!! ";
});
function myFunction(x) {
    x.style.background = "yellow";
}




