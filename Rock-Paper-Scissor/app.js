let [computer_score,user_score] = [0,0];
let result = document.getElementById('result');
let choices_object ={
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }
}

function checker(input){
    var choices = ["rock","paper","scissor"];
    var num = Math.floor(Math.random()*3);
    console.log(num);
    document.getElementById("comp_choice").innerHTML = `Computer Choose <span> ${input.toUpperCase() } </span>`;

    let computer_choice = choices[num];
    console.log(computer_choice);

    switch(choices_object[input][computer_choice]){
        case 'win' :
            result.style.cssText="background-color: #cefdce; color: #689f38";
            result.innerHTML ="YOU WIN";
            user_score++;
            break;
        case 'lose' :
            result.style.cssText="background-color: #ffdd30; color: #d32f2f";
            result.innerHTML="YOU LOSE";
            computer_score++;
            break;
        default:
            result.style.cssText="background-color: #e5e5e5; color: #808080";
            result.innerHTML="DRAW";
            break;

    }

    document.getElementById("computer_score").innerHTML=computer_score;
    document.getElementById("user_score").innerHTML=user_score;

}