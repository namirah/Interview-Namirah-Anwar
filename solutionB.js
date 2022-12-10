const solutionB = (a, b) => {
  a += "";
  b += "";
  if (b.length <= 0) return console.log(0);

  let n = 0,
    c = 0,
    d = 1;

  while (true) {
    c = a.indexOf(b, c);
    if (c >= 0) {
      ++n;
      c += d;
    } else break;
  }

  console.log(n);
};

solutionB("hello", "");
