// create a game : stone , paper & scissores
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// const array = Array.from(choices);

const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");

const gencompchoice = () =>{
    let option = ["rock","paper","scissors"];
    const ranID = Math.floor(Math.random()*3);
    return option[ranID];
}

const drawgame = () => {
    console.log("The game Was Draw");
    msg.innerText = "The Game Will be draw, play again";
    msg.style.backgroundColor = "#081b31";
};

let showwinner = (userwin,Userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win!");
        msg.innerText = `You win Your ${Userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You Lose");
        msg.innerText = `You Lost.${compchoice} beats Your ${Userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (Userchoice) => {
    console.log("User's Choice = ",Userchoice);
    // Genret computer choice
    const compchoice = gencompchoice();
    console.log("Computer's Choice = ",compchoice);

    if(Userchoice === compchoice){
        // Draw game
        drawgame();
    }else {
        let userwin = true;
        if (Userchoice === "rock"){
            // scissors , paper
            userwin = compchoice === "paper" ? false:true;
        }else if(Userchoice === "paper"){
            // rock, scissors
            userwin = compchoice === "scissors" ? false:true
        }else{
            // rock ,paper
            userwin = compchoice === "rock" ? false:true
        }
        showwinner(userwin,Userchoice,compchoice); 
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id");
        playgame(Userchoice);
    });
});
