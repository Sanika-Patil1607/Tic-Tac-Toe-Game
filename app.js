let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let winnerMsg=document.querySelector(".winnerMsg");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#newGame");

let turn0=true;
let count=0;


let winningCombinations=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

let resetGame=()=>{
    turn0=true;
    enableBoxes();
    winnerMsg.classList.add("hide");

}
    
let enableBoxes=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
 }
}

let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}


let showWinner=(winner)=>{
    winnerMsg.classList.remove("hide");
    msg.innerText=`Congratulations! ${winner} wins the game!`;
    disableBoxes();
}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button clicked ");
        if(turn0){
            box.innerText="0";
            turn0=false;

        }
        else{
            box.innerText="X";
            turn0=true;

        }
        box.disabled=true;
        count++;
       let isWinner=checkWinner();
       if (!isWinner && count===9){
        winnerMsg.classList.remove("hide");
        msg.innerText="Game Over! It's a draw!";
        disableBoxes();
       }
    });
});

let checkWinner=()=>{
    for ( let combination of winningCombinations){
        let pos1Val=boxes[combination[0]].innerText;
        let pos2Val=boxes[combination[1]].innerText;
        let pos3Val=boxes[combination[2]].innerText;

        if (pos1Val!="" && pos2Val!=""  && pos3Val!="" &&pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner is"+pos1Val);
            showWinner(pos1Val);
            return true;
            
    }
}
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);