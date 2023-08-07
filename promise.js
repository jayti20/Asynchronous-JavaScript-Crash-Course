// to avoid callback hell, we use promises

const promise = new Promise((resolve, reject) => {
  resolve("Error occurred in data fetching");
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const promise_user_data = new Promise((resolve, reject) => {
  resolve({ user: "Bianca" });
});
promise_user_data
  .then((data) => {
    console.log("Todo list for user", data);
    return fetch("https://jsonplaceholder.typicode.com/todos/1");
  })
  .then((todos) => {
    console.log(todos);
  })
  .catch((err) => {
    console.log(err);
  });

// Use setTimeout with promises
const server_data = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
    resolve(data);
  }, 2000);
});

server_data.then((res) => {
  console.log(res.url);
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    return data.json();
  })
  .then((jsonedData) => {
    console.log("JS Object data", jsonedData);
  })
  .catch((err) => {
    console.log("Could not fetch the data");
  })
  .finally(() => {
    console.log("Execution is completed.");
  });

Promise.all([promise, promise_user_data, server_data]).then((values) => {
  console.log("Values are", values);
});
