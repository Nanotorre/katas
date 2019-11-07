function whoIsWinner(piecesPositionList){
  let grid= [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ]
  piecesPositionList.forEach(piece => {
     let pos = [5, piece.charCodeAt(0)-65 ]
     while(grid[pos[0]][pos[1]]!==0) {
       pos[0]-=1
     }
     
    if(/Red/.test(piece)) {
      grid[pos[0]][pos[1]]="R"
    }
    else {
       grid[pos[0]][pos[1]]="L"
       

    }
        console.log()
    
       
  })
  console.log(grid)
}


 piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
                       
whoIsWinner(piecesPositionList)