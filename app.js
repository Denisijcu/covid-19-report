
/* Ui */
let searchContry = document.querySelector("#_valueSearch");
let btnSearch = document.querySelector(".btnSearch");

let a = 0;
let b = 0;
let c = 0;
let d = 0;

btnSearch.addEventListener("click", fnSearch, false);

function fnSearch() {
    console.log("Clicked", searchContry.value);

    if (searchContry.value === "") {
        showData();
        return;
    }

    const data = countries.filter(country => country.name == searchContry.value.trim());
  

    // const w = setTimeout(() => {

    document.querySelector(".output").innerHTML = `
        <div class="m-6 font-bold text-2xl mb-4 text-center">
       
        Total Global
    
    </div>
    
     <div class="m-4 bg-gray-100 shadow-ls hover:shadow-xl rounded-2xl">
     <!-- Four columns -->
     <div class="flex mb-4">
     <div class="w-1/4 bg-gray-400 h-12 text-center"> Confirmed </div>
     <div class="w-1/4 bg-gray-400 h-12 text-center"> Recovered </div>
     <div class="w-1/4 bg-gray-400 h-12 text-center"> Critical </div>
     <div class="w-1/4 bg-gray-400 h-12 text-center"> Deaths </div>
     </div>
    
     <div class="flex mb-4">
     <div class="w-1/4 bg-gray-100 h-12 text-center"> ${a} </div>
     <div class="w-1/4 bg-gray-100 h-12 text-center"> ${b} </div>
     <div class="w-1/4 bg-gray-100 h-12 text-center"> </div>
     <div class="w-1/4 bg-gray-100 h-12 text-center">${d} </div>
     </div>
     </div>
     
    
            <div class="text-left font-bold text-3xl ml-4 mt-4 mb-4" > Countries List </div>
    
            <div class="m-4">
    
            <div class="bg-gray-100  m-6 font-bold text-2xl mb-4 text-center">
             <p class="text-gray-700">
              ${data[0].name} 
             </p>
            </div>
    
            <!-- Four columns -->
            <div class="flex">
            <div class="w-1/4 bg-gray-400 h-12 text-center"> Confirmed </div>
            <div class="w-1/4 bg-gray-400 h-12 text-center"> Recovered </div>
            <div class="w-1/4 bg-gray-400 h-12 text-center"> Critical </div>
            <div class="w-1/4 bg-gray-400 h-12 text-center"> Deaths </div>
            </div>
    
            <div class="flex">
            <div class="w-1/4 bg-gray-100 h-12 text-center"> ${data[0].confirmed} </div>
            <div class="w-1/4 bg-gray-100 h-12 text-center"> ${data[0].recovered} </div>
            <div class="w-1/4 bg-gray-100 h-12 text-center"> </div>
            <div class="w-1/4 bg-gray-100 h-12 text-center">${data[0].deaths} </div>
            </div>
    
           
       
    
            </div>
    
            
    
    
          
       
    
     </div>       
    
        `;

    // },300)




}


let country = {
    name: String,
    confirmed: String,
    recovered: String,
    critical: String,
    deaths: String
}
let totals = {
    confirmed: Number,
    recovered: Number,
    critical: Number,
    deaths: Number
}
let countries = [];

function getData() {

    fetch("https://covid19-data.p.rapidapi.com/all", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid19-data.p.rapidapi.com",
                "x-rapidapi-key": "a4d88542ddmsh83b0bba200cbeadp153617jsn8ecb1e30a036"
            }
        })
        .then(response => {
            return response.json();


        })
        .then((data) => {
            data.forEach(e => {
               
                country = {
                    name: e.country,
                    confirmed: e.confirmed,
                    recovered: e.recovered,
                    critical: e.critical,
                    deaths: e.deaths
                };
                countries.push(country);
                return countries;
            });
        })
        .catch(err => {
            console.log(err);
        });
    return countries;
}





function totalConfirmed() {
    let initialValue = 0
    let sum = data.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.confirmed
    }, initialValue);
    totals.confirmed = sum;
    return sum;
}

function totalRecovered() {
    let initialValue = 0
    let sum = data.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.recovered
    }, initialValue);
    totals.recovered = sum;
    return sum;
}

function totalCritical() {
    let initialValue = 0
    let sum = data.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.critical
    }, initialValue);
    totals.critical = sum;
    return sum;
}

function totalDeaths() {
    let initialValue = 0
    let sum = data.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.deaths
    }, initialValue);
    totals.deaths = sum;
    return sum;

}

const esperar = setTimeout(showData, 300);


function showData() {
    const confirmed = totalConfirmed();
    const recovered = totalRecovered();
    const critical = totalCritical();
    const deaths = totalDeaths();

    let conf = new Intl.NumberFormat('de-DE').format(confirmed);
    let reco = new Intl.NumberFormat('de-DE').format(recovered);
    let criti = new Intl.NumberFormat('de-DE').format(critical);
    let death = new Intl.NumberFormat('de-DE').format(deaths);

    a = conf;
    b = reco;
    c = criti;
    d = death;

    let lista = "";
    countries.map(country => {

        lista += `<div class="m-4">

        <div class="bg-gray-100  m-6 font-bold text-2xl mb-4 text-center">
         <p class="text-gray-700">
          ${country.name} 
         </p>
        </div>

        <!-- Four columns -->
        <div class="flex">
        <div class="w-1/4 bg-gray-400 h-12 text-center"> Confirmed </div>
        <div class="w-1/4 bg-gray-400 h-12 text-center"> Recovered </div>
        <div class="w-1/4 bg-gray-400 h-12 text-center"> Critical </div>
        <div class="w-1/4 bg-gray-400 h-12 text-center"> Deaths </div>
        </div>

        <div class="flex">
        <div class="w-1/4 bg-gray-100 h-12 text-center"> ${country.confirmed} </div>
        <div class="w-1/4 bg-gray-100 h-12 text-center"> ${country.recovered} </div>
        <div class="w-1/4 bg-gray-100 h-12 text-center"> </div>
        <div class="w-1/4 bg-gray-100 h-12 text-center">${country.deaths} </div>
        </div>

       
   

        </div>
        
       `;

    });



    document.querySelector(".output").innerHTML = `

    <div class="m-6 font-bold text-2xl mb-4 text-center">
   
       Total Global
 
   </div>

    <div class="m-4 bg-gray-100 shadow-ls hover:shadow-xl rounded-2xl">
    <!-- Four columns -->
    <div class="flex mb-4">
    <div class="w-1/4 bg-gray-400 h-12 text-center"> Confirmed </div>
    <div class="w-1/4 bg-gray-400 h-12 text-center"> Recovered </div>
    <div class="w-1/4 bg-gray-400 h-12 text-center"> Critical </div>
    <div class="w-1/4 bg-gray-400 h-12 text-center"> Deaths </div>
    </div>

    <div class="flex mb-4">
    <div class="w-1/4 bg-gray-100 h-12 text-center"> ${conf} </div>
    <div class="w-1/4 bg-gray-100 h-12 text-center"> ${reco} </div>
    <div class="w-1/4 bg-gray-100 h-12 text-center">  </div>
    <div class="w-1/4 bg-gray-100 h-12 text-center">${death} </div>
    </div>
    </div>
    
   
           <div class="text-left font-bold text-3xl ml-4 mt-4 mb-4" > Countries List </div>
           ${lista}
      

    </div>       
 
    `;
}


let data = getData();
setTimeout(() => {
    showData();
}, 2000);
