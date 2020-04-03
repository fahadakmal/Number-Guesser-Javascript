/**
 * Game Function
 * player  must guess a number between min and max
 * player get a setain amount of guesses
 * notify player of guesses remoaining
 * notify the palyer of the correct answer if lose
 * let player chosse to play again 
 */

 //game values
  let min=1,
  max =10,
  wining_num=getRandomNum(min,max);
  guessessLeft=5;

  //ui elements
  const game=document.querySelector('#game'), 
  minNum=document.querySelector('.min-num'),
  maxNum=document.querySelector('.max-num'),
  guessBtn=document.querySelector('#guess-btn'),
  guessInput=document.querySelector('#guess-input'),
  message= document.querySelector('.message');


  //assign ui min and max
  minNum.textContent=min;
  maxNum.textContent=max;

  //play again event lister
  game.addEventListener('mousedown',function(e)
  {
    if(e.target.className ==='play-again')
    {
      window.location.reload();
    }
  })
  //listen for guess
  guessBtn.addEventListener('click',function()
  {

    let guess=parseInt(guessInput.value);
    //Validate
    if(isNaN(guess) || guess < min || guess > max)
    {    
      setmessage(`plz enter a number between ${min} and ${max}`,'red');
    }
    // check if won
    if(guess === wining_num)
    {

      msg=`${wining_num} is correct.You won the game`;
 gamover(true,msg);

    }else
    {

//wrong number
guessessLeft -=1;

if(guessessLeft === 0)
{
  msg=`Game Over .you lost .the corrrct number was  ${wining_num}`;
  gamover(false,msg);


}else{
  // change border color
guessInput.style.borderColor='red';
//clear input
guessInput.value='';
//game continus answer wrong
setmessage(`Guess is not correct .${guessessLeft} gusses left`,'red');

}

    }
    
  })
  //game over

  function gamover(won,msg)
  {
    let color;
    color= won===true ? 'green':'red';
      //game over-won
      guessInput.disabled=true;
      // change border color
      guessInput.style.borderColor=color;
      // msg.style.color=color;
      //set text color
      //set message
      setmessage(msg,color);
      //play again
      guessBtn.value='Play Again';
      guessBtn.className ='play-again';


  }



function getRandomNum(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
  
  // Math.random(min,max)
}
  // set mesage
function setmessage(msg,color)
{
  message.style.color=color;

message.textContent=msg


}