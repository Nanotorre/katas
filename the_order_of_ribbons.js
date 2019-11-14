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
    let numbersObj= {};
    ribbon.split('').forEach(number => {if(numbers.indexOf(number)<0) numbers.push(number)});
    numbers.forEach(n=> numbersObj[n] = ribbon.split('').filter(x=> x===n).length);
    const highestValue = Object.keys(numbersObj).reduce((a, b) => numbersObj[a] > numbersObj[b] ? a : b);
    xObj[highestValue]= numbersObj[highestValue];
  })

  let yObj = {}
  Array(10).fill(0).map((n,idx)=> idx).forEach(x => yObj[x]=0)
  let cleanDots = ribbonsArr.map( line => {
    return line.replace(/\./g,"");
  })
  Object.keys(yObj).map(key => {
    yObj[key]= cleanDots.filter(x=> x.includes(key)).length
  })
  let final= []
  Object.keys(yObj).forEach(key=> {
      if (!xObj.hasOwnProperty(key) && yObj[key]!==0){
        final.push([+key, yObj[key]])
    }
  })
  xObj= Object.entries(xObj).map(x=> [x[0]=+x[0], x[1]]).sort((a,b)=> {
    return a[1]>b[1]? 1:-1;
  
  })
  console.log(final)


  return xObj;
  
}

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