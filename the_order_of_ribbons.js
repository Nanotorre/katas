function theOrderOf(ribbons){
  let ribbonsArr= ribbons.replace(/\n/g, " ").split(" ");
  let xArr = [];
  ribbonsArr.forEach( line => {
    const lineClean= line.replace(/\./g, "");
    if (lineClean.length===11) return xArr.push(lineClean)
  });
  let xObj = {};
  xArr.forEach( ribbon => {
    let numbers=[]
    ribbon.split('').forEach(number => {if(numbers.indexOf(number)<0) numbers.push(number)});
    console.log(numbers.forEach(n=> xObj[n] = ribbon.split('').filter(x=> x===n).length))
    xObj[ribbon] = 1;
  })
  return xObj
  
}

//incomplete

console.log(theOrderOf(
`.2.........
12111111111
.2.........
.2.........
33333333333
.2.........
.2.........
.2.........
.2.........
.2.........
.2.........`))