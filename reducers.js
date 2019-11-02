function findAll(n, k) {
  const startNumber = Array(k).fill("1").join("");
  const endNumber = Array(k).fill("9").join("");
  let count=[];
  
  for(let i=parseInt(startNumber); i<= parseInt(endNumber); i++) {
    if((""+i).split("").map(n=>parseInt(n)).reduce((ac,av)=> ac+av)===n &&
    (""+i).split("").map(n=>parseInt(n)).every((digit, idx, arr) => {
      if(idx===0) {
        return true;
      }
      if(digit>=arr[idx-1]) {
        return true
      }
      
    })
    ) {
      count.push(i)
    }

  }
  return [count.length, count[0], count[count.length-1]].every(number=> Boolean(number))?
  [count.length, count[0].toString(), count[count.length-1].toString()]
  :[]

}


console.log(findAll(10, 3))