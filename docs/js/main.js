const a=document.querySelector(".js__ulCharacters"),l=document.querySelector(".js__ulFavourites"),_=document.querySelector(".js__binfavourites");document.querySelector(".js__form");document.querySelector(".js__inputSearch");document.querySelector(".js__btnSearch");let c=[];function u(e){a.innerHTML+=`<li class="ul__liCharacters">
            <div class="ul__liCharacters__icons">
                <img class="ul__liCharacters__icons__like js__like" src="./images/like.png" alt="like">
            </div>
            <h3 class="ul__liCharacters__h3">${e.name}</h3>
            <img class="ul__liCharacters__imgs" src=${e.imageUrl} alt="images Characters">
        </li>`}function m(){for(const r of c)u(r);const e=document.querySelectorAll(".js__like");for(const r of e)r.addEventListener("click",d)}function h(){l.innerHTML=""}function d(e){const r=e.currentTarget.closest("li"),t=Array.from(a.children).indexOf(r),i=c[t];l.innerHTML+=`<li class="ul__liFavourites">
      <div class="ul__liFavourites__icons">
        <img class="ul__liFavourites__icons__heart" src="./images/heart.png" alt="heart">
        <img class="ul__liFavourites__icons__X js__removeLikes" src="./images/cancel.png" alt="Cancel">
      </div>
      <h3 class="ul__liFavourites__h3">${i.name}</h3>
      <img class="ul__liFavourites__imgs" src=${i.imageUrl} alt="images Characters">
    </li>`;const n=document.querySelectorAll(".js__removeLikes");function o(s){s.currentTarget.closest("li").remove()}for(const s of n)s.addEventListener("click",o)}fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{c=e.data,m()});_.addEventListener("click",h);
//# sourceMappingURL=main.js.map
