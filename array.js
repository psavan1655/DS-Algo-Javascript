let tmp = 1;

let arr = [2, 4, 6, 8];

function rotateByOne(arr, k, n) {
  let tmp1 = [];
  let tmp2 = [];
  arr.map((e, idx) => {
    if (idx < k) {
      tmp1.push(e);
    } else {
      tmp2.push(e);
    }
  });
  return tmp2.concat(tmp1);
}

console.log(rotateByOne(arr, 2, arr.length), " test");
