// Cambiar fondo de Characters: 
   clickedLi.classList.replace('$color-bg','$color-favourites');
   console.log (clickedLi);



// Array de Favoritos:
      //DATOS
   let favouritesData = [];

  function handleClickLikes (event){
  
     // Obtener el elemento padre del like clickeado que es un <li>
     const clickedLi = event.currentTarget.closest('li');
  
     const clickedid = clickedLi.dataset.id;
  
     console.log(clickedid); //funciona hasta aquí. 
  
     const selectedFavouriteData = charactersData.find((OneFavourite) => OneFavourite._id === clickedid);
  
     console.log(selectedFavouriteData); // undefined
  
     favouritesData.push (selectedFavouriteData);

     if(selectedFavouriteData === -1) {
      //inner.HTML, porque significa que no está en favoritos
      
      favouritesData.push (selectedFavouriteData);

     }

     //inner.HTML, porque significa que está en favoritos
     else(selectedFavouriteData === 0) {
      favouritesData.slice(selectedFavouriteData, 1) ;
      }
   
};


//Busqueda de tu personaje favorito:
form.addEventListener ('submit', (event) => {
   event.preventDefault();
   fetch(`//api.disneyapi.dev/character?name=${inputSearch.value}`)
   .then (response => response.json())
   .then (data => {
 
       charactersData=data.data;
       ulCharacters.innerHTML += '';
 
       renderAll ();
   })
       
 });