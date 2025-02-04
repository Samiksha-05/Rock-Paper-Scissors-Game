let choices = document.querySelectorAll(".choice");
// console.log(choice);
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#You");
let computerScore = document.querySelector("#Compu");
let user_score = 0;
let computer_score = 0;
const compChoice =()=>{
    const options = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];

};
const plagGame = (userChoice) =>{
    const computerChoice = compChoice();
    console.log(computerChoice);
    console.log(userChoice);
    let userAnswer = true;

    if(userChoice === computerChoice)
    {
        msg.innerText = "Game was Draw. Try again."
        msg.style.backgroundColor = "#BDD5E7";
        return;
    }

    else
    {
        if (userChoice === 'rock'){
            userAnswer = computerChoice === 'paper' ? false:true;
            console.log(userAnswer);
    }   

        else if (userChoice === 'paper')
        {
            userAnswer = computerChoice === 'scissors' ? false:true;
            console.log(userAnswer);
        }   
        else
        {
            userAnswer = computerChoice === 'rock' ? false:true;
            console.log(userAnswer);
        }
    }
    if(userAnswer)
    {
        user_score++;
        userScore.innerText = user_score;
        msg.innerText = `You Win ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#52A447";
    }
    else
    {
        computer_score++;
        computerScore.innerText = computer_score;
        msg.innerText = `You Lost ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#ff4f4b";
    }

    if(user_score > computer_score)  
    {
        userScore.style.color = "	#59E659";
        computerScore.style.color = "#FF3131";
    }
    else
    {
        userScore.style.color = "#FF3131";
        computerScore.style.color = "	#59E659";

    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("Your choice is Clicked");
        // console.log(userChoice);
        plagGame(userChoice);
    })
});