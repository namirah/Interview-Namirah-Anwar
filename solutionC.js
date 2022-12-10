const solutionC = (a) => {
  const removeSpace = a.replace(/\s/g, "");
  const result = [...removeSpace].reduce(
    (a, b) => ((a[b] = (a[b] || 0) + 1), a),
    {}
  );
  console.log(
    Object.fromEntries(Object.entries(result).sort(Intl.Collator().compare))
  );
};

solutionC("MasyaAllah");
