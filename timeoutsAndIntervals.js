// setTimeOut()
function greet(name) {
  console.log(`Hi, ${name}`);
}
const timeoutid = setTimeout(greet, 2000, "Jayti");
console.log(timeoutid);
clearInterval(timeoutid);

const intervalid = setInterval(greet, 2000, "Jayti");
clearInterval(intervalid);

// setTimeout as setInterval (recursive setTimeOut)
setTimeout(
  function run(name) {
    console.log(`Hi, ${name}`);
    setTimeout(run, 2000);
  },
  2000,
  "Jayti"
);
