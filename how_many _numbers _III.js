function findAll(n, k) {
  const startNumber = Array(k)
    .fill("1")
    .join("");
  const endNumber = Array(k)
    .fill("9")
    .join("");
  let count = [];

  for (let i = parseInt(startNumber); i <= parseInt(endNumber); i++) {
    if (
      ("" + i)
        .split("")
        .map(n => parseInt(n))
        .reduce((ac, av) => ac + av) === n &&
      ("" + i)
        .split("")
        .map(n => parseInt(n))
        .every((digit, idx, arr) => {
          if (idx === 0) {
            return true;
          }
          if (digit >= arr[idx - 1]) {
            return true;
          }
        })
    ) {
      count.push(i);
    }
  }
  return [count.length, count[0], count[count.length - 1]].every(number =>
    Boolean(number)
  )
    ? [count.length, count[0].toString(), count[count.length - 1].toString()]
    : [];
}

function findAll2(n, k) {
  let str = +"9".repeat(k);
  let arr = Array(str)
    .fill(str)
    .map((n, i) => n - i)
    .filter(x => {
      let arrs = ("" + x).split("").map(y => parseInt(y));
      return (
        arrs.reduce((ac, av) => ac + av) === n &&
        arrs.length === k &&
        arrs.every((digit, idx, arr) => {
          if (idx === 0) {
            return true;
          }
          if (digit >= arr[idx - 1]) {
            return true;
          }
        })
      );
    });

  return arr.length === 0
    ? []
    : [arr.length, arr[arr.length - 1].toString(), arr[0].toString()];
}

function findAll3(n, k) {
  const str = +"9".repeat(k);
  const arr = Array(str)
    .fill(str)
    .map((n, i) => [
      n - i,
      ("" + (n - i)).split("").map(y => parseInt(y)),
      ("" + (n - i))
        .split("")
        .map(y => parseInt(y))
        .reduce((ac, av) => ac + av)
    ]);

  const result = arr
    .filter(
      x =>
        x[1].length === k &&
        x[2] === n &&
        x[1].every((digit, idx, arr) => {
          return idx === 0 || digit >= arr[idx - 1] ? true : false;
        })
    )
    .map(x => x[0]);

  return result.length > 0
    ? [
        result.length,
        result[result.length - 1].toString(),
        result[0].toString()
      ]
    : [];
}

function findAll4(n, k) {
  const str = +"9".repeat(k);
  const arraized = number => ("" + number).split("").map(y => parseInt(y));
  const arr = Array(str)
    .fill(str)
    .map((n, i) => [
      n - i,
      arraized(n - i),
      arraized(n - i).reduce((ac, av) => ac + av)
    ]);

  const result = arr
    .filter(
      x =>
        x[1].length === k &&
        x[2] === n &&
        x[1].every((digit, idx, arr) => {
          return idx === 0 || digit >= arr[idx - 1] ? true : false;
        })
    )
    .map(x => x[0]);

  return result.length > 0
    ? [
        result.length,
        result[result.length - 1].toString(),
        result[0].toString()
      ]
    : [];
}

function findAll5(n, k) {
  const arraized = number => ("" + number).split("").map(y => parseInt(y));
  const arr = Array(+"9".repeat(k))
    .fill(+"9".repeat(k))
    .map((n, i) => [
      n - i,
      arraized(n - i),
      arraized(n - i).reduce((ac, av) => ac + av)
    ])
    .filter(
      x =>
        x[1].length === k &&
        x[2] === n &&
        x[1].every((digit, idx, arr) =>
          idx === 0 || digit >= arr[idx - 1] ? true : false
        )
    )
    .map(x => x[0]);

  return arr.length > 0
    ? [arr.length, arr[arr.length - 1].toString(), arr[0].toString()]
    : [];
}

function findAll6(n, k) {
  const arrRes = (n, k) => {
    const arraized = number => ("" + number).split("").map(y => parseInt(y));
    return Array(+"9".repeat(k))
      .fill(+"9".repeat(k))
      .map((n, i) => arraized(n - i))
      .filter(
        x =>
          x.length === k &&
          x.reduce((ac, av) => ac + av) === n &&
          x.every((digit, idx, arr) =>
            idx === 0 || digit >= arr[idx - 1] ? true : false
          )
      );
  };
  const arr = arrRes(n, k);

  return arr.length > 0
    ? [arr.length, arr[arr.length - 1].join(""), arr[0].join("")]
    : [];
}

function findAll7(n, k) {
  let set1 = new Set();
  for (let i = +"1".repeat(k); i <= +"9".repeat(k); i++) {
    let num = ("" + i).split("").map(y => parseInt(y));
    if (num.reduce((ac, av) => ac + av) === n) {
      if (
        num.every((digit, idx, arr) => {
          return idx === 0 || digit >= arr[idx - 1] ? true : false;
        })
      ) {
        set1.add(i);
      }
    }
  }
  return set1.size > 0
    ? [set1.size, Math.min(...set1).toString(), Math.max(...set1).toString()]
    : [];
}

console.log(findAll(10, 3));
