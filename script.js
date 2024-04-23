let res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>foo(data1));

let container = document.createElement("div");
container.className = "container";

let row = document.createElement("div");
row.className = "row";

let title = document.createElement("h1");
title.id = "title";
title.innerHTML = "Rest Countries and Weather Using Fetch API";
title.className = "text-center";

container.append(title);
document.body.append(container);

function foo(data1){
    for(var i=0;i<data1.length;i++){
        let col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
        col.innerHTML = `
        <div class="card h-100">
        <div class="card-header">
        <h5 class = "card-title text-center"><b>${data1[i].name.common}</b></h5>
        </div>
        <div class="img-box">
        <img src="${data1[i].flags.png}" class="card-img-top" alt="Country Flag Image">
        </div>
        
        <div class="card-body">
          <div class="card-text text-center"><b>Region:</b> ${data1[i].region}</div>
          <div class="card-text text-center"><b>Capital:</b> ${data1[i].capital}</div>
          <div class="card-text text-center"><b>Country Code:</b> ${data1[i].cca3}</div>          
          <button  class="btn btn-primary" onclick="button_click(event, ${data1[i].latlng[0]}, ${data1[i].latlng[1]})">Click for Weather</button>
          <br>
          <span class="temperature-span"></span>
          </div>
        </div>`  
        
    row.append(col);
    }
}

function button_click(event, lat, lon){
  event.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8f110d087a43865625b26cfa1f87f8b
  `)
      .then((data2)=>data2.json()).then((data3)=>{
        let temperature = data3.main.temp;
      let span = event.target.parentElement.querySelector('.temperature-span');
      span.innerText = `Temperature: ${temperature}`;
    })
    }
    container.append(row);
    document.body.append(container);