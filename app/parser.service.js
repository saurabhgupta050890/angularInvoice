angular.module('InvoiceParser')
    .service('ParcerService', ParcerService)

ParcerService.$inject = [];


function ParcerService() {
    var bitMap = {
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
        console.log(ascii.split("\n"));
        return ascii
            .split("\n")
            .reduce(function(arr, part, index) {
                //Split part into group of 3
                part.match(/.../g).forEach(function(b, j) {
                    arr[j] = arr[j] || [];
                    arr[j][index] = b;
                });
                return arr;
            }, [])
            .map(function(a) {
                //console.log(a);
                return a.join("");
            })
            .map(function(num) {
                var result = "909561432".split("").reduce(function(res, val, i) {
                    return res + num[i] !== " " ? Math.pow(2, parseInt(val, 10)) : 0;
                }, 0);
                return bitMap[result] || "?"; //? is the invalid character
            })
            .join("");
    }
}