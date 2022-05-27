initBoard()
addClickable()

function initBoard() {
   for (let i = 0; i < 3; i++) {
      let row = document.createElement('div')
      row.classList.add('row')
      for (let j = 0; j < 3; j++) {
         let cell = document.createElement('div')
         cell.classList.add('cell')
         cell.setAttribute('id', `${i}${j}`)
         row.appendChild(cell)
      }
   
      gameBoard.appendChild(row)
   }
}

function addClickable() {
   const cells = document.querySelectorAll('.cell')
   cells.forEach(item => {
      item.addEventListener('click', game)
   })
}

function game(evt) {
   let target = evt.target
   if (target.classList.contains('filled') || tic.win) {
      return
   }

   target.textContent = tic.addSymbol()   
   target.classList.add('filled')

   tic.numTurns++

   tic.fillArr(target)
   tic.checkWinner()
   if (tic.win) {
      tic.displayWinner.textContent = `${tic.winner} won`
   } else if (tic.numTurns === 10) {
      tic.displayWinner.textContent = 'It\'s a tie'
   }
}


const tic = {
   win: false,
   winner: '',
   xTurn: false,
   gameArr: [['', '', ''], ['', '', ''], ['', '', '']],
   numTurns: 1,
   displayWinner: document.querySelector('h3'),

   addSymbol() {
      this.xTurn = !this.xTurn
      return this.xTurn ? 'X' : 'O'
   },

   fillArr(tar) {
      let tempArr = tar.id.split('')
      console.log(tempArr)
      this.gameArr[Number(tempArr[0])][Number(tempArr[1])] = tar.innerText
      console.log(this.gameArr)
   },

   checkWinner() {
      const flatArr = this.gameArr.flat()
      
      if (flatArr[0] === 'X' && flatArr[1] === 'X' && flatArr[2] === 'X' ||
         flatArr[3] === 'X' && flatArr[4] === 'X' && flatArr[5] === 'X' ||
         flatArr[6] === 'X' && flatArr[7] === 'X' && flatArr[8] === 'X' ||
         flatArr[0] === 'X' && flatArr[3] === 'X' && flatArr[6] === 'X' ||
         flatArr[1] === 'X' && flatArr[4] === 'X' && flatArr[7] === 'X' ||
         flatArr[2] === 'X' && flatArr[5] === 'X' && flatArr[8] === 'X' ||
         flatArr[0] === 'X' && flatArr[4] === 'X' && flatArr[8] === 'X' ||
         flatArr[2] === 'X' && flatArr[4] === 'X' && flatArr[6] === 'X') {
            this.winner = 'X'
            this.win = true
            
      } else if (flatArr[0] === 'O' && flatArr[1] === 'O' && flatArr[2] === 'O' ||
         flatArr[3] === 'O' && flatArr[4] === 'O' && flatArr[5] === 'O' ||
         flatArr[6] === 'O' && flatArr[7] === 'O' && flatArr[8] === 'O' ||
         flatArr[0] === 'O' && flatArr[3] === 'O' && flatArr[6] === 'O' ||
         flatArr[1] === 'O' && flatArr[4] === 'O' && flatArr[7] === 'O' ||
         flatArr[2] === 'O' && flatArr[5] === 'O' && flatArr[8] === 'O' ||
         flatArr[0] === 'O' && flatArr[4] === 'O' && flatArr[8] === 'O' ||
         flatArr[2] === 'O' && flatArr[4] === 'O' && flatArr[6] === 'O') {
            this.winner = 'O'
            this.win = true
      }
   },

}
