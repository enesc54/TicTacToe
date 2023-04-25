let player1 = true

let firstPlayer = []
let secondPlayer = []

const winning = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
const cells = document.querySelectorAll(".cell")

for (let i = 0; i < cells.length; i++){
    cells[i].onclick = function(e){
        let cell = cells[i]
        console.log(cell)
        if(player1){
            if(cell.textContent === ''){
                cell.textContent = "X"
                firstPlayer.push(cell.id)
                win(firstPlayer,'X')
            }
            player1 = !player1;
        }else{
            if(cell.textContent === ''){
                cell.textContent = "O"
                secondPlayer.push(cell.id)
                win(secondPlayer,'O')
            }
            player1 = !player1;
        }
    }
}

function isWin(player,playerSymbol){
    let won = 0
    for(let i of winning){
        for(let j of i){
            if(player.includes(`${j}`)){
                won++
            }else{
                won = 0
                break
            }
        }
        if(won === 3){
            alert(`${playerSymbol} HAS WON!!!`)
            location.reload()
            return
        }
    }
    if (firstPlayer.length + secondPlayer.length === 9) {
            alert('DRAW')
            location.reload()
    }
}