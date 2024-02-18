const express = require("express");
const app = express()
app.get("/hello/:number1/:number2", (req,res) => {
    const num1 = req.params.number1;
    const num2 = req.params.number2;
    const total = Number(num1) + Number(num2);
    res.send(`le total est ${total}`);
});

app.get("/hey", (req,res) => {
    res.send("slm")
});
app.get("/test", (req,res) =>{
    res.send("test")
});
app.get("/", (req,res) => {
    res.send("hello in node js")
});
app.put("/aziz", (req,res) => {
    res.send("aslema");
});
app.delete("/supp", (req,res) => {
    res.send("supprimer tout les choses")
});
app.patch("/jj", (req,res) => {
    res.send("put");
})
const PORT = 5000; // Changer le port à 5000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
