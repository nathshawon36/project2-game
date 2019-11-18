
window.alert('WELCOME! In pig game');

var score, roundScore, activePlayer, dice, diceRoll;

diceRoll = dice;
   initial();

//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var a = document.querySelector('#score-0').textContent;
//console.log(a);

document.querySelector('.btn-new').addEventListener('click', initial);
function initial(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Plyer 1';
    document.getElementById('name-1').textContent = 'player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    }
 
document.querySelector('.btn-roll').addEventListener('click', function(){
        //random number
       var dice = Math.floor(Math.random()*6)+1;

        //display the result
       var diceDOM = document.querySelector('.dice');
       diceDOM.style.display = 'block';

       diceDOM.src = 'img/dice-' + dice + '.png';
       //update the round score if the rolled number in not 1
       if(dice === 6 && diceRoll === 6){
          // looses the point
          score[activePlayer] = 0;
          document.querySelector('#score-' + activePlayer).textContent = '0';
          nextPlayer();
       }

      else if(dice !== 1){
           roundScore += dice;
           document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
        //ternary operator
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        /*
        if(activePlayer === 0){
              activePlayer = 1;
        }else{
            activePlayer = 0;
        }
        */
        roundScore = 0;

        //updating score
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
       
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    // add score in global

   score[activePlayer] += roundScore;
   document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];


   if(score[activePlayer] >= 20){
    document.querySelector('#name-' + activePlayer).textContent = 'winner!';
    document.querySelector('.dice').style.display = 'none';
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}
else{
    nextPlayer();
}

   //update UI


   //check winner
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    /*
    if(activePlayer === 0){
          activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    */
    roundScore = 0;

    //updating score
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
   
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}