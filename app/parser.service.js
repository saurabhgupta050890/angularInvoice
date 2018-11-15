angular.module("InvoiceParser").service("ParcerService", ParcerService);

ParcerService.$inject = [];

function ParcerService() {
  let bitMap = {
    63: 0,
    6: 1,
    91: 2,
    79: 3,
    102: 4,
    109: 5,
    125: 6,
    7: 7,
    127: 8,
    111: 9,
    0: " ",
    119: "A",
    124: "b",
    57: "C",
    62: "d",
    121: "E",
    113: "F"
  };

  this.parseSevenSegmentASCII = function(ascii) {
    return ascii
      .split("\n")
      .reduce(decodeSegmentReducer, [])
      .map(a => a.join(""))
      .map(num => {
        var result = getNumberFromBitmap(num);
        return bitMap[result].toString() || "?"; //? is the invalid character
      })
      .join("");
  };

  let decodeSegmentReducer = (arr, part, index) => {
    part.match(/.../g).forEach((b, j) => {
      arr[j] = arr[j] || [];
      arr[j][index] = b;
    });
    return arr;
  };

  let getNumberFromBitmap = number =>
    "909561432"
      .split("")
      .reduce(
        (res, val, i) =>
          res + (number[i] !== " " ? Math.pow(2, parseInt(val, 10)) : 0),
        0
      );
}
