function sum(num) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
    printTotal(total);
  }
  return total;
}

function printTotal(num) {
  console.log("예상치 못한 벌레 포착 !");
  console.log(`total: ${num}`);
  console.log("loggin ._.");
}

const result = sum(10);
console.log(result);
