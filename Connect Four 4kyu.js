function whoIsWinner(piecesPositionList){
  let grid= [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ]

   for(let piece of piecesPositionList) {
     let pos = [5, piece.charCodeAt(0)-65]
     while(grid[pos[0]][pos[1]]!==0) {
       pos[0]-=1
     }
     
    if(/Red/.test(piece)) {
      grid[pos[0]][pos[1]]="R"
    }
    else {
       grid[pos[0]][pos[1]]="Y"
    }

    for (let i=0; i<7; i++) {

          if(grid[5][i]=== 'Y'&& grid[4][i]==='Y' &&  grid[3][i]==='Y' && grid[2][i]==='Y' ||
             grid[4][i]=== 'Y'&& grid[3][i]==='Y' &&  grid[2][i]==='Y' && grid[1][i]==='Y' ||
             grid[3][i]=== 'Y'&& grid[2][i]==='Y' &&  grid[1][i]==='Y' && grid[0][i]==='Y') 
          
            return "yellow"
          if (grid[5][i]=== 'R'&& grid[4][i]==='R' &&  grid[3][i]==='R' && grid[2][i]==='R' ||
             grid[4][i]=== 'R'&& grid[3][i]==='R' &&  grid[2][i]==='R' && grid[1][i]==='R' ||
             grid[3][i]=== 'R'&& grid[2][i]==='R' &&  grid[1][i]==='R' && grid[0][i]==='R') {

              return "red"
             }
        } 

    for (let arr of grid) {
         let "Y", "R";
        if(arr.forEach(piece=> {
          if(piece==="Y" && piece
          
        }))
    }


        if(grid.every(piece=> piece.every(pos=>pos!==0))) {
          return "draw"
        }
   }   

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
                       
console.log(whoIsWinner(piecesPositionList))