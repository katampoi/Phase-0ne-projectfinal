//fetch(url,options);(option contains headers,methods,Body)
// document.addEventListener("DOMContentLoaded",() =>{
//     const resturantDetailsUrl = "https://api.example.com/restaurants/:id"

//     function getProject(){
//        let reqoptions ={
//         method:"GET"
//        } 
//        fetch(resturantDetailsUrl, reqoptions)
//        .then((response)=>(response.json()))
//        .then(result =>{
//         console.log(result)
//        })



//        getProject()
//     }

// })

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://api.example.com/meals/?restaurantId=2", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// })

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '021a3814f1mshc051263799b9e92p14093ejsn3339dc83df32',
		'X-RapidAPI-Host': 'udayogra-indian-restaurants-menu-v1.p.rapidapi.com'
	}
};

fetch('https://udayogra-indian-restaurants-menu-v1.p.rapidapi.com/dl?area=koramangala&city=bangalore', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))