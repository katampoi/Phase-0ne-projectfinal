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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '021a3814f1mshc051263799b9e92p14093ejsn3339dc83df32',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
	.then(response => response.json())
	.then(data => {
        let html= ""
        data.hints.map(meals => {
            console.log(meals)
            html+=` <div class="find">
            <img src=" ${meals.food.image}" alt="">
            <h4> ${meals.food.category}</h4>
            <h4> ${meals.food.label} </h4>
        </div> `
        } )
        document.getElementById("meal").innerHTML=html
    })
	.catch(err => console.error(err));


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '021a3814f1mshc051263799b9e92p14093ejsn3339dc83df32',
// 		'X-RapidAPI-Host': 'food71.p.rapidapi.com'
// 	}
// };

// fetch('https://food71.p.rapidapi.com/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


