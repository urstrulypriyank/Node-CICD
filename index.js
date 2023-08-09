const app = require("express")();

app.get("/hello", (req, res) => {
    res.status(200).send("Hello World after update 🚀")
})

app.get("/home", (req, res) => {
    res.status(200).send("Hi there")
})
app.get("/", (req, res) => {
    res.status(200).send("Hello World From Root 🚀")
})

app.listen(3000, () => {
    console.log('🖥 server running on http://localhost:' + 3000)
})