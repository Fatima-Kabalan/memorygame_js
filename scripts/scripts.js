const cards = document.querySelectorAll('.card');
// const btn = document.getElementById("btn");

// cards.forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('flip');
//   });
// });

// console.log(cards);

let flippedcard = false;
let firstcard , secondcard ;

function  flipcard() {
    this.classList.add('flip');
    if (flippedcard){
        //first click for the player
        flippedcard = true ;
        firstcard = this ;
        console.log({flippedcard});
    }
    else{
        flippedcard = false;
        secondcard = this ;

        // Check matching cards 
        // console.log(firstcard.name);
        console.log(secondcard.dataset.name);
        
    }


}


cards.forEach(card => card.addEventListener('click',flipcard))