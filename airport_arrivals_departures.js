const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789";
let before = ["HELLO "]
//["DOG"]
let rotors =  [[15,49,50,48,43,13]]


const flapDisplay = (lines, rotors) => {
  let positions = lines.map(line => {
    return line.split("").map(letter => ALPHABET.indexOf(letter))
  });
  
  const moveRotors = (rotors, position) => {
    let singlePositions= [...position]
    rotors.forEach((move, i) => 
      singlePositions.forEach((position, idx) => {
      let sum= idx+i;
      return idx+i<singlePositions.length?
      singlePositions[idx+i]= singlePositions[idx+i]+move : null  
    })
  )
    return singlePositions;
  }
  const decode = res => {
    return res.map(letter => {

    while(letter>=54){
      letter-=54
    }
    return ALPHABET[letter] 
    }).join("")
  }

  let linesResult = rotors.map((rotor, i)=> moveRotors(rotors[i], positions[i]))
  return linesResult.map( line=> decode(line))
}

console.log(flapDisplay(before, rotors))