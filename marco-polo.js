const marcoPolo = (max = 100) => {
  let result = [1];

  for (let x = 2; x <= max; x++) {
    if (x % 28 === 0) result.push("marcopolo");
    else if (x % 4 === 0) result.push("marco");
    else if (x % 7 === 0) result.push("polo");
    else result.push(x);
  }

  return result.join(",");
};

module.exports = marcoPolo;
