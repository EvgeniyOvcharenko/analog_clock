let fieldForCards = document.createElement("div");
fieldForCards.classList.add("fieldForCards");
document.body.append(fieldForCards);

function createCard(img, name, description, rating, date){
  let containerForCard = document.createElement("div");
  containerForCard.classList.add("containerForCard");
  fieldForCards.append(containerForCard);
  
  let cardImg = document.createElement("img");
  cardImg.classList.add("cardImg");
  cardImg.src = img;
  containerForCard.append(cardImg);
  
  let divName = document.createElement("div");
  divName.classList.add("divName");
  divName.textContent = name;
  containerForCard.append(divName);
  
  let divDescription = document.createElement("div");
  divDescription.classList.add("divDescription");
  divDescription.textContent = description;
  containerForCard.append(divDescription);

  let divRating = document.createElement("div");
  divRating.classList.add("divRating");
  divRating.textContent = "Рейтинг: " + rating;
  containerForCard.append(divRating);

  let divDate = document.createElement("div");
  divDate.classList.add("divDate");
  divDate.innerHTML = "Дата выхода: " + date;
  containerForCard.append(divDate);
}

const inputName = document.querySelector("#inputName");

function loadCards(){ 
  fetch(result)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      for(let key of data.results){
        if(key.poster_path == null){
          continue
        }
      //   console.log(key.original_title);  name
      //   console.log(key.overview);  description
      //   console.log(key.vote_average); rating
      //   console.log(key.release_date); date
      createCard("https://image.tmdb.org/t/p/w400" + key.poster_path, key.original_title, key.overview, key.vote_average, key.release_date);
    }
  });
}

form.oninput = function() {
  fieldForCards.innerHTML = "";
  result = inputName.value;
  result = `https://api.themoviedb.org/3/search/movie?api_key=55df8add4909a3871ad4cd3e7b6581c8&language=en-US&query=${inputName.value}&page=1&include_adult=false`;
  loadCards()
};