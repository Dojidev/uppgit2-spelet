const cards = document.querySelectorAll('.card');



function flipcard(e) {
  let cardIsClicked = e.target;
  cardIsClicked.classList.add("flip");

  let backImage = cardIsClicked.querySelector(".back-view");
  backImage.style.display = "block"
  
}


cards.forEach(function(card) {
  card.addEventListener("click", flipcard);
});


NiceSelect.bind(document.getElementById("a-select"));



























// if (whenCardClicked.classList.contains("flip"))    
//     const imageBack = document.querySelector('.image-back');
//     imagaBack.style.display = "block";
//   } else {  
//     return;
//   }
// }