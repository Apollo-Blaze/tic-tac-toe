let playerText=document.getElementById('playerText')
let rest=document.getElementById('rest')
let boxes=Array.from(document.getElementsByClassName('box'))

console.log(boxes)
const O_TEXT="O"
const X_TEXT="X"
let currentPlayer=X_TEXT
let spaces=Array(9).fill(null)

const startGame=()=>{
    boxes.forEach(box=>box.addEventListener('click',boxClicked))
}

function boxClicked(e){
    const id=e.target.id

    if(!spaces[id]){
        spaces[id]=currentPlayer
        e.target.innerText=currentPlayer
        currentPlayer=currentPlayer == X_TEXT ? O_TEXT : X_TEXT
        if(playerHasWon()){
            playerText=`${currentPlayer} has won!`
        }
    }
}
rest.addEventListener('click',restart)
function restart(){
    spaces.fill(null)
    boxes.forEach(box=>{
        box.innerText=""
    })
    currentPlayer=X_TEXT
    playerText='Tic Tac Toe'
}
const winningCombos=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
function playerHasWon(){
    
}
startGame()