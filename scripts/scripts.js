const cards = document.querySelectorAll('.card');
const p = document.getElementById("parag");


let flippedcard = false;
let firstcard, secondcard ;
let score = 0 ;
let count = 0 ;

// counting the clicks on cards and checking the matched ones 
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
        p.innerHTML = score ;   
    }
}
  

function checkMatch(){
    // Check matching cards 
    let a = firstcard.dataset.name;
    let b = secondcard.dataset.name;
    if(a == b){
        score++;
        firstcard.removeEventListener('click',flipcard);
        secondcard.removeEventListener('click',flipcard);
        firstcard.classList.add('hidden');
        secondcard.classList.add('hidden');         
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

// To keep the cards flipped after clicking on them 
function disablecards(){
    firstcard.removeEventListener('click',flipcard);
    secondcard.removeEventListener('click',flipcard);
}



cards.forEach(card => card.addEventListener('click',flipcard));
