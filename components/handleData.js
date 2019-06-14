const colors = require("colors");
const handleData = function(width = 1, topH = 1, midH = 1, botH = 1) {
  let dot = ".".yellow;
  let tag = "#".red;
  let bline = "\n";
  const sym1 = (sym2 = [dot, tag, dot, tag, dot]);
  const sym3 = (sym9 = [tag, tag, tag, tag, tag]);
  const sym4 = (sym5 = [tag, dot, tag, dot, tag]);
  const sym6 = [tag, dot, dot, dot, tag];
  const sym7 = (sym8 = [tag, tag, dot, tag, tag]);
  const sym10 = (sym11 = sym12 = [dot, tag, tag, tag, dot]);
  const sym13 = [dot, dot, tag, dot, dot];
  const arr1 = (arr4 = arr7 = arr11 = [
    2 * width,
    width,
    3 * width,
    width,
    2 * width
  ]);
  const arr2 = (arr3 = arr9 = arr10 = [
    width,
    3 * width,
    width,
    3 * width,
    width
  ]);
  const arr5 = (arr6 = arr8 = arr13 = [
    2 * width,
    2 * width,
    width,
    2 * width,
    2 * width
  ]);
  const arr12 = [3 * width, width, width, width, 3 * width];
  const Arr = [
    arr1,
    arr2,
    arr3,
    arr4,
    arr5,
    arr6,
    arr7,
    arr8,
    arr9,
    arr10,
    arr11,
    arr12,
    arr13
  ];
  const Sym = [
    sym1,
    sym2,
    sym3,
    sym4,
    sym5,
    sym6,
    sym7,
    sym8,
    sym9,
    sym10,
    sym11,
    sym12,
    sym13
  ];
  let arr;
  let sym;
  let result = bline;
  let height;
  for (let i = 0; i < 13; ++i) {
    arr = Arr[i];
    sym = Sym[i];
    if (i == 2) height = topH * 3;
    else if (i <= 4) height = topH;
    else if (i > 5) height = botH;
    else height = midH;
    for (let h = height; h > 0; --h) {
      for (let q = 0; q < 5; ++q) {
        for (let k = arr[q]; k > 0; --k) {
          result += sym[q];
        }
      }
      result += bline;
    }
  }
  return result;
};
module.exports = handleData;
