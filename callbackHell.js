function a() {
  console.log("a called!");
}

function b(callback) {
  setTimeout(
    (name) => {
      console.log(name);
      callback();
    },
    0,
    "Jayti"
  );
}

function c() {
  console.log("c called!");
}

a();
b(c);
function callback() {
  const data = { user: "Johnny" };
  console.log(data);
  setTimeout(() => {
    console.log("User data has been updated.");
  }, 500);
}
function higherOrderFunction(callback) {
  setTimeout(callback, 2000);
}
higherOrderFunction(callback);
