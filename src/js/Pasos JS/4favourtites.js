'use strict';

//QUERY SELECTOR
const ulCharacters = document.querySelector('.js__ulCharacters');
const ulFavourites = document.querySelector('.js__ulFavourites');

//DATOS
let charactersData = [];

//FUNCIONES
function renderOne(disneyData) {
  ulCharacters.innerHTML += `<li class="ul__liCharacters">
            <div class="ul__liCharacters__icons">
                <img class="ul__liCharacters__icons__like js__like" src="./images/like.png" alt="like">
            </div>
            <h3 class="ul__liCharacters__h3">${disneyData.name}</h3>
            <img class="ul__liCharacters__imgs" src=${disneyData.imageUrl} alt="images Characters">
        </li>`;
}

function renderAll() {
  for (const eachCharacter of charactersData) {
    renderOne(eachCharacter);
  }

  const allLikes = document.querySelectorAll('.js__like');
  
  for (const like of allLikes) {
    like.addEventListener('click', handleClickLikes);
  }

}

//FUNCIONES DE EVENTOS (HANDLER)

function handleClickLikes (event){

  //Como no es la misma card que Characters exactamente, porque le cambio los iconos y las clases, no lo he hecho con id. 

   // Obtener el elemento padre del like clickeado que es un <li>
   const clickedLi = event.currentTarget.closest('li');

   // Obtener el índice del elemento seleccionado como favorito en la lista de personajes
   const index = Array.from(ulCharacters.children).indexOf(clickedLi);
   
   // Obtener los datos del personaje seleccionado
   const selectedCharacter = charactersData[index];
   
   // Añadir a la lista de favoritos
    ulFavourites.innerHTML += `<li class="ul__liFavourites">
      <div class="ul__liFavourites__icons">
        <img class="ul__liFavourites__icons__heart" src="./images/heart.png" alt="heart">
        <img class="ul__liFavourites__icons__X" src="./images/cancel.png" alt="X">
      </div>
      <h3 class="ul__liFavourites__h3">${selectedCharacter.name}</h3>
      <img class="ul__liFavourites__imgs" src=${selectedCharacter.imageUrl} alt="images Characters">
    </li>`;

};

//EVENTOS

//CODIGO CUANDO CARGA LA PÁGINA

fetch ('//api.disneyapi.dev/character?pageSize=50')
    .then (response => response.json())
    .then (data => {

        charactersData=data.data;

        renderAll ();
        
    });



  