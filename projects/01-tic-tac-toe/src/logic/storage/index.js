export function saveGameToStorage (board, turn){
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export function removeGameStorage(){
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}