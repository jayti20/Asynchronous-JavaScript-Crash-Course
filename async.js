async function getTodos() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("1");
    console.log(response);
    console.log("2");
  } catch {
    console.log("Error occured");
  } finally {
    console.log("Code execution completed!");
  }
}
getTodos();
