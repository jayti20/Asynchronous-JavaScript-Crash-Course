function a() {
  console.log("a called!");
}

function b() {
  setTimeout(
    (name) => {
      console.log(name);
    },
    0,
    "Jayti"
  );
}

function c() {
  console.log("c called!");
}

a();
b();
c();
