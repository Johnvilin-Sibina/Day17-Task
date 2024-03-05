let res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>foo(data1));

let container = document.createElement("div");
container.className = "container";

let row = document.createElement("div");
row.className = "row";

function foo(data1){
    for(var i=0;i<data1.length;i++){
        let col = document.createElement("div");
        col.className = "col-lg-4 col-sm-2";
        col.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        
        <img src=${data1[i].flags.png} class="card-img-top">
        
        <div class="card-body">
          <h5 class="card-title">Capital: ${data1[i].capital}</h5>
          <h5 class="card-title">Region: ${data1[i].region}</h5>
          <h5 class="card-title">Country Code: ${data1[i].cca3}</h5>          
          <a href="#" class="btn btn-primary" onclick="button_click(event, ${data1[i].latlng[0]}, ${data1[i].latlng[1]})">Click for Weather</a>
          <br>
          <span class="temperature-span"></span>
          </div>
        </div>`  
        
    row.append(col);
    container.append(row);
    document.body.append(container);
    }
}

function button_click(event, lat, lon){
  event.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`)
      .then((data2)=>data2.json()).then((data3)=>{
        let temperature = data3.main.temp;
      let span = event.target.parentElement.querySelector('.temperature-span');
      span.innerText = `Temperature: ${temperature}`;
    })
    }  


