'use strict';

//QUERY SELECTOR
const ulCharacters = document.querySelector('.js__ulCharacters');
const ulFavourites = document.querySelector('.js__ulFavourites');
const binfavourites = document.querySelector('.js__binfavourites');
const form = document.querySelector('.js__form');
const inputSearch = document.querySelector('.js__inputSearch');
const btnSearch = document.querySelector('.js__btnSearch');
const btnLoG = document.querySelector('.js_btnLOG');

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
            <p class="ul__liFavourites__h3">${disneyData._id}</p>
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

// Borrar todos los favoritos, limpiando la lista:
function handleClearFavorites() {
  ulFavourites.innerHTML = '';
}

// Funcion de favoritos:
function handleClickLikes (event){

   // Obtener el elemento padre del like clickeado que es un <li>
   const clickedLi = event.currentTarget.closest('li');

   // Obtener el índice del elemento seleccionado como favorito en la lista de personajes
   const index = Array.from(ulCharacters.children).indexOf(clickedLi);
   
   // Obtener los datos del personaje seleccionado
   const selectedCharacter = charactersData[index];
   
   // Añadir a la lista de favoritos
    ulFavourites.innerHTML += `<li js_favouriteContador class="ul__liFavourites">
      <div class="ul__liFavourites__icons">
        <img class="ul__liFavourites__icons__heart" src="./images/heart.png" alt="heart">
        <img class="ul__liFavourites__icons__X js__removeLikes" src="./images/cancel.png" alt="Cancel">
      </div>
      <h3 class="ul__liFavourites__h3">${selectedCharacter.name}</h3>
      <img class="ul__liFavourites__imgs" src=${selectedCharacter.imageUrl} alt="images Characters">
    </li>`;
  
  //Quitar favoritos - con Cancel:
  const removeLike = document.querySelectorAll('.js__removeLikes');

  function handleRemoveLikes (event) {

    // Obtener el elemento padre de cancel, que es un <li>
    const favouriteRemoveLi = event.currentTarget.closest('li');

    // Eliminar el elemento de la lista de favoritos
    favouriteRemoveLi.remove();
  }

  // funcion con cada uno de los cancels
  for (const cancel of removeLike) {
    cancel.addEventListener('click', handleRemoveLikes);
  }

};

//EVENTOS

//CODIGO CUANDO CARGA LA PÁGINA

fetch ('//api.disneyapi.dev/character?pageSize=50')
    .then (response => response.json())
    .then (data => {

        charactersData=data.data;

        renderAll ();
        
    });

// Borrar todos los favoritos
binfavourites.addEventListener('click', handleClearFavorites);

const favouriteContador = document.querySelectorAll('.js_favouriteContador');

btnLoG.addEventListener('click' , (event) =>{
  event.preventDefault();
  console.log (favouriteContador.length)
});
