//fetch(url,options);(option contains headers,methods,Body)
document.addEventListener("DOMContentLoaded",() =>{
    const resturantDetailsUrl = "https://api.example.com/restaurants/:id"

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

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.example.com/meals/?restaurantId=2", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})