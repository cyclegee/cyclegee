let score =JSON.parse( localStorage.getItem('score')) || {
  wins:0,
    losses:0,
    ties:0
};

updateScoreElement();

function Playing(){
  document.querySelector('.js-Autoplay-button').innerHTML = 'Auto play';
}

function stopPlaying(){
  document.querySelector('.js-Autoplay-button').innerHTML = 'Stop Playing';
}



 
 let isAutoPlaying=false;
 let intervalid;

function autoPlay(){
  if(!isAutoPlaying){
   intervalid= setInterval(function(){
      const playerMove=pickComputermove();
      playGame(playerMove);
      stopPlaying();
    }, 1000);
    isAutoPlaying=true;
  }else{
    
   clearInterval(intervalid);
   isAutoPlaying=false;
   Playing()
   
  }
 
 }

 document.querySelector('.js-rock-button').addEventListener('click', () =>{
  playGame('Rock');
  hidePrompt()
 });

 document.querySelector('.js-paper-button').addEventListener('click', () =>{
  playGame('Paper');
  hidePrompt()
 });

 document.querySelector('.js-scissor-button').addEventListener('click', () =>{
  playGame('Scissors');
  hidePrompt()
 });

 
  document.querySelector('.js-Autoplay-button').addEventListener('click', () =>{
    autoPlay();
    hidePrompt()
    
    
   });
   


 
 document.querySelector('.js-reset-button').addEventListener('click', () =>{

  bringPrompt();
  /*score.wins=0;
      score.losses=0;
      score.ties=0;
      localStorage.removeItem('score');
      updateScoreElement();*/
 });

 function bringPrompt(){
  document.querySelector('.js-prompt').innerHTML=`Are you sure you want to reset the score? 
  <button onclick="
  showReset()
  hidePrompt()
  " class="js-okay">Yes</button> 
  <button onclick="
  hidePrompt()
  " class="js-no">No</button>`;
 }

 function showReset(){
  score.wins=0;
      score.losses=0;
      score.ties=0;
      localStorage.removeItem('score');
      updateScoreElement();
 }

 function hidePrompt(){
  document.querySelector('.js-prompt')
  .innerHTML='';
 }

 /*document.querySelector('.js-promp').addEventListener('click', () =>{
  hidePrompt()
 });*/


 document.body.addEventListener('keydown', (event)=>{
  if(event.key==='r'){
    playGame('Rock');
  } else if(event.key==='p'){
    playGame('Paper');
  } else if(event.key==='s'){
    playGame('Scissors');
  } else if(event.key==='a'){
    autoPlay();
  } else if(event.key==='Backspace'){
    
      score.wins=0;
          score.losses=0;
          score.ties=0;
          localStorage.removeItem('score');
          updateScoreElement();
     
  }
 });

function playGame(playerMove){
    const computerMove = pickComputermove();
    

    result = '';
    if (playerMove ==='Scissors'){
      if (computerMove === 'Rock') {
    result = 'You loose.';
    } else if (computerMove === 'Paper') {
    result = 'You win.';
    } else if (computerMove === 'Scissors') {
    result = 'Tie.';
    }

  }else if(playerMove==='Paper'){
      if (computerMove === 'Rock') {
    result = 'You win.';
    } else if (computerMove === 'Paper') {
    result = 'Tie.';
    } else if (computerMove === 'Scissors') {
    result = 'You loose.';
    }

  }else if(playerMove==='Rock'){
      if (computerMove === 'Rock') {
    result = 'Tie.';
  } else if (computerMove === 'Paper') {
    result = 'You loose.';
  } else if (computerMove === 'Scissors') {
    result = 'You win.';
  }
 
    } if(result==='You win.'){
      score.wins++;
    }else if(result==='You loose.'){
      score.losses++;
    }else if(result==='Tie.'){
      score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
     .innerHTML=`${result}`;
    
    document.querySelector('.js-moves')
     .innerHTML=`You 
      <img src="emojis/${playerMove}-emoji.png" class="move-icon">
      <img src="emojis/${computerMove}-emoji.png"class="move-icon">
      computer`

   
  }

function updateScoreElement(){
  document.querySelector('.js-score')
     .innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}  


function pickComputermove(){
  randomNumber = Math.random();
  
  let computerMove = '';
  if (randomNumber >=0 && randomNumber <1/3) {
  computerMove ='Rock';
  } else if (randomNumber >=1/3 && randomNumber <2/3)  {
  computerMove ='Paper';
  } else if (randomNumber >=2/3 && randomNumber <1) {
  computerMove ='Scissors';
  }
  return computerMove; 
}