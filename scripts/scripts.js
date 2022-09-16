const cards = document.querySelectorAll('.card');
const p = document.getElementById("parag");
// cards.forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('flip');
//   });
// });

let flippedcard = false;
let firstcard, secondcard ;
let score = 0 ;
let count = 0 ;

function  flipcard() {
    this.classList.add('flip');
    if (!flippedcard){
        //first click for the player
        flippedcard = true ;
        firstcard = this;
        console.log({flippedcard});
        count++;
        console.log(count);

    }
    else{
        flippedcard = false;
        secondcard = this ;
        count++;
        console.log(count);
        checkMatch();
    }
}
  
function checkMatch(){
    // Check matching cards 
    let a = firstcard.dataset.name;
    let b = secondcard.dataset.name;
//    let score = 0 ;
    if(a == b){
        score++;
        firstcard.removeEventListener('click',flipcard);
        secondcard.removeEventListener('click',flipcard);
        p.innerHTML = score;            
    }else{
        //cards are not matching 
        // settimeout is to have enough time to see cards flipping 
        setTimeout( () => {
            disablecards();
        } , 100 );
    }
    if (count == 6 ){
        if(score == 3){
            alert("You WIN!!!")
        }else{
            alert("YOU LOSE!")
        }
    }
}


function disablecards(){
    firstcard.removeEventListener('click',flipcard);
    secondcard.removeEventListener('click',flipcard);
}



cards.forEach(card => card.addEventListener('click',flipcard));
