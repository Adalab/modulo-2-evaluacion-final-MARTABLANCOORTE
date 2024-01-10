'use strict';

//QUERY SELECTOR

const ulCharacters = document.querySelector('.js__ulCharacters');

//DATOS

    // [Array] de {objetos}

const charactersData = [
  {
    name: "Achilles",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
    createdAt: "2021-04-12T01:31:30.547Z",
    updatedAt: "2021-12-20T20:39:18.033Z",
    url: "https://api.disneyapi.dev/characters/112",
    __v: 0,
  },
  {
    name: "Abigail the Cow",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
    createdAt: "2021-04-12T01:26:03.413Z",
    updatedAt: "2021-12-20T20:39:18.032Z",
    url: "https://api.disneyapi.dev/characters/18",
    __v: 0,
  },
  {
    name: "Ahadi",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/b/b3/Ahadihead.png",
    createdAt: "2021-04-12T01:31:47.129Z",
    updatedAt: "2021-12-20T20:39:18.877Z",
    url: "https://api.disneyapi.dev/characters/139",
    __v: 0,
  },
];

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
  /*Bucle --> sirve para que la i vaya cambiando: casi siempre de esta forma:
        for (let i=0; i< variable.length; i++) {render ( ArraydeObjetos [i] ) }*/

  for (let i = 0; i < charactersData.length; i++) {
    renderOne(charactersData[i]);
  }

  /*Bucle también se puede hacer con un forOf: for (const nombre_cada_objeto_eachX of nombre_del_Array) { render (eachX)}*/

  for (const eachCharacter of charactersData) {
    renderOne(eachCharacter);
  }

  /*Bucle también se puede hacer con un forEach: (esta más de moda)
  nombre_del_Array.forEach (función arrow: nombre_cada_objeto => {cod ejecutar: renderOne (nombre_cada_ objeto); });*/

  charactersData.forEach((eachCharacter) => {
    renderOne(eachCharacter);
  });
}

//FUNCIONES DE EVENTOS (HANDLER)

//EVENTOS

//CODIGO CUANDO CARGA LA PÁGINA

renderAll();
