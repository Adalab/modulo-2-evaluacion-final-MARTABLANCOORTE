'use strict';

//QUERY SELECTOR

const ulCharacters = document.querySelector('.js__ulCharacters');

//DATOS

let charactersData = [];

//FUNCIONES

function renderOne(disneyData) {
  ulCharacters.innerHTML += `<li class="ul__liCharacters">
            <div class="ul__liCharacters__icons">
                <img class="ul__liCharacters__icons__like" src="./images/like.png" alt="like">
            </div>
            <h3 class="ul__liCharacters__h3">${disneyData.name}</h3>
            <img class="ul__liCharacters__imgs" src=${disneyData.imageUrl} alt="images Characters">
        </li>`;
}

function renderAll() {
  for (const eachCharacter of charactersData) {
    renderOne(eachCharacter);
  }
}

//FUNCIONES DE EVENTOS (HANDLER)

//EVENTOS

//CODIGO CUANDO CARGA LA PÁGINA

    /*Fetch: traernos el Api, para que si hay actualizaciones se modifique automaticamente. 
fetch ('sourceUrlAPI')
    .then (response => response.json())
    .then (data => {
        xData = data.x;)
    });
    */

fetch ('//api.disneyapi.dev/character?pageSize=50')
    .then (response => response.json())
    .then (data => {
        console.log (data.data); 

        charactersData=data.data;

        renderAll ();
        
    });
