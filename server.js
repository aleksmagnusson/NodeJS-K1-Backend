const http = require("http");
const fs = require("fs");

const PORT = 5000;

let todos; /*= [
  {
    id: 1,
    task: "Vakna på morgonen",
    done: false,
  },
  {
    id: 2,
    task: "Borsta tänderna",
    done: false,
  },
  {
    id: 3,
    task: "Laga frukost",
    done: false,
  },
  {
    id: 4,
    task: "Starta dagen",
    done: false,
  },
];
*/
function readTodos() {
  // implementera funktionen till koden.
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const json = data;
    const parsedData = JSON.parse(json);
    todos = parsedData;
  });
}

function writeFile(todos) {
  fs.writeFile("todos.json", JSON.stringify(todos), "utf-8", (err, data) => {
    if (err) throw err;
  });
}

// Hämtar igen readTodos();
readTodos();

const app = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PATCH, DELETE, OPTIONS, POST, PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // req.method === "OPTIONS" för att stödja API endpoint med Insomnia / Frontend till Backend.
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.statusCode = 200;
    res.end();
  }

  const path = req.url.split("/");
  console.log(path);

  if (req.method === "GET" && path[1] === "todos" && path.length === 3) {
    // Hämta id för varje todos.
    const requestedId = parseInt(path[2]);
    const requestedTodos = todos.find((todo) => todo.id === requestedId);

    if (requestedTodos) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(requestedTodos));
    } else {
      res.statusCode = 404;
      res.end();
    }
  }

  if (req.method === "GET" && path[1] === "todos" && path.length === 2) {
    // Hämtar alla todos från "todos.json".
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(todos));
  }
  if (req.method === "POST" && path[1] === "todos" && path.length === 2) {
    // Skickar data/skapar ny till todo/nya todos.
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      console.log("En ny todo är skapad!");
      console.log("Kolla i 'todos.json' för att se data.");
      todos.push(data);

      res.statusCode = 200;
      console.log(todos);
      res.end();
      writeFile(todos, null, "\t");
    });
  }

  if (req.method === "DELETE" && path[1] === "todos" && path.length === 3) {
    // DELETE, ta bort en todo.
    const requestedId = parseInt(path[2]);
    todos = todos.filter((todo) => todo.id !== requestedId);

    res.statusCode = 200;
    console.log("Todo är nu raderad");
    writeFile(todos, null, "\t");
    res.end();
  }

  if (req.method === "PUT" && path[1] === "todos" && path.length === 3) {
    // PUT /Ändra alla värden i vardera todos. /
    const requestedId = parseInt(path[2]);
    const todosIndex = todos.findIndex((todos) => todos.id === requestedId);

    req.on("data", (chunk) => {
      todos[todosIndex] = JSON.parse(chunk);
      console.log(todos);

      res.statusCode = 200;
      console.log("Todo har ändrats!");
      res.end();
      writeFile(todos, null, "\t");
    });
  } else if (
    req.method === "PATCH" &&
    path[1] === "todos" &&
    path.length === 3
  ) {
    // PATCH / Ändrar bara 1 todo. Inte hela värdet på listan. /
    const requestedId = parseInt(path[2]);
    const todosIndex = todos.findIndex((todos) => todos.id === requestedId);

    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      let todo = todos[todosIndex];

      if (data.task) {
        todo.task = data.task;
      }
      todos[todosIndex] = todo;
      console.log(todos);

      res.statusCode = 200;
      console.log("En todo [PATCH] är ändrad!");
      res.end();
      writeFile(todos, null, "\t");
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});
