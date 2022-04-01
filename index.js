const express = require("express");
const users = require(`${__dirname}/modules/users`);
const port = 8000;
const app = express ();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.post("/login", users.login);

app.get("/", users.main);

app.listen(port, () => {console.log(`O servidor foi iniciado em ${port}`)});