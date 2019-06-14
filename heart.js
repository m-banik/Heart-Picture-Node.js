const handleData = require("./components/handleData");
const args = process.argv.slice(2);
let flag = true;
for (let i = 0; i < args.length; ++i) {
  if (
    !typeof args[i] === "number" ||
    args[i] % 1 !== parseInt(0) ||
    args[i] <= parseInt(0)
  ) {
    flag = false;
    console.log("All variables should be integers higher than zero");
    break;
  }
}
if (flag) console.log(handleData(args[0], args[1], args[2], args[3]));
