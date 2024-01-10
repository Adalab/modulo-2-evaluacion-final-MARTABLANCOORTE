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
];

//FUNCIONES

function renderOne(disneyData) {
    ulCharacters.innerHTML += 
        `<li class="ul__liCharacters">
            <div class="ul__liCharacters__icons">
                <img class="ul__liCharacters__icons__like" src="./images/like.png" alt="like">
            </div>
            <h3 class="ul__liCharacters__h3">${disneyData.name}</h3>
            <img class="ul__liCharacters__imgs" src=${disneyData.imageUrl} alt="images Characters">
        </li>`;
    }

//FUNCIONES DE EVENTOS (HANDLER)

//EVENTOS

//CODIGO CUANDO CARGA LA PÁGINA

    //renderOne llamada función o invocar Objeto (variable [posicion dentro del Array])

renderOne (charactersData[0]);

renderOne (charactersData[1]);