'use strict'

function createFilm(e){
    e.preventDefault();
    debugger;
    const cinema = {
        cinema: document.getElementById("cinema").value,
        film: document.getElementById("film").value,
        cost: document.getElementById("cost").value
    }
    fetch('http://localhost:8080/create', {
    
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cinema)
        })
        .then(response => response.json())
        .then(cinema => {
            console.log('', cinema);
        })
        .catch((error) => {
            alert('Error ='+error);
        })
  }

  function editCinemaInfo() {
      let id = document.getElementById("editID").value
      fetch(`http://localhost:8080/replace/` + id, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "cinema": editCinema.value,
            "film": editFilm.value,
            "cost": editCost.value,
        }
    )
    }) 
    .then(res => res.json())
        .then((data) => console.log(`Request succeeded with JSON response ${data}`))
        .catch((error) => console.log(`Request failed ${error}`))
};

let allCinemaTable = "";
function Read() {
    let ReadCINEMA = fetch(`http://localhost:8080/getAll`);
    ReadCINEMA.then(function(response) {
        let CA = response.json();
        CA.then(function(data){
            allCinemaTable = document.createElement("table");
            allCinemaTable.style = "width 60%";
            allCinemaTable.border = 2;
        })
    })
    
}

function deletebyID() {
    let deletebyID = document.getElementById("deletebyID").value;
    fetch("http://localhost:8080/remove/" + deletebyID, {
        method: 'delete'   
    })
    .then((data) => {
        console.log(`Request succeeded with JSON response ${data}`);
    })
    .catch((error) => {
        
    });
}

function showRecord(id, cinema, film, cost) {
    let refRow=document.createElement("tr")
    let refTd = document.createElement("td")
    let refTd1=document.createElement("td")
    let refTd2=document.createElement("td")
    let refTd3=document.createElement("td")

    refTd.innerHTML = id        
    refTd1.innerHTML= cinema
    refTd2.innerHTML= film
    refTd3.innerHTML= cost
    refRow.appendChild(refTd)
    refRow.appendChild(refTd1)
    refRow.appendChild(refTd2)
    refRow.appendChild(refTd3)
    refTable.appendChild(refRow)
    
    allCinemaTable.appendChild(refRow)
    document.body.appendChild(refTable)
    }
        

 