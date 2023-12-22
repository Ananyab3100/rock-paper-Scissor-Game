const icons = document.querySelectorAll('.icon-container .icon');
const resultContainer = document.querySelector('.result-container');
const displayResult = document.querySelector('.result h1');


let  arr = [['paper','fa-solid fa-hand'],['rock','fa-solid fa-hand-back-fist'],['scissor','fa-solid fa-hand-scissors']];
for(let i=0; i<arr.length;i++){
    icons[i].addEventListener('click',() =>{
        displayResult.innerText="";
        resultContainer.innerHTML="";
        setTimeout(gameLogic,1000,i);
    });
   
}




 function gameLogic(i){

    let player = arr[i][0];
    let ran = Math.floor((Math.random()*arr.length));
    let comp = arr[ran][0];
    resultContainer.innerHTML = `<h3>You</h3><div class="icon"><i class="${arr[i][1]}"></i></i></div>
                                 <h3>Comp</h3><div class="icon"><i class="${arr[ran][1]}"></i></div>`;


    if(player == comp){
        displayResult.innerText ='DRAW!!';
    }
    else if((player=='scissor' && comp=='paper' )||
            (player=='paper' && comp=='rock') ||
            (player=='rock' && comp=='scissor')
            ){
                displayResult.innerText = 'YOU WON!!!!';
            }
    else{
        displayResult.innerText ='YOU LOST!';
    }
 }

















