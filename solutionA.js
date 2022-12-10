const solutionA = (arr) => {
  const newArr = arr.sort(
    (a, b) => isFinite(b) - isFinite(a) || a - b || a.localeCompare(b)
  );
  const huruf = newArr.filter((el) => isNaN(el));
  const angka = newArr.filter((el) => isFinite(el));
  console.log(huruf.concat(angka));
};

solutionA([12, 9, 30, "A", "M", 99, 82, "J", "N", "B"]);
