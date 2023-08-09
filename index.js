const app = require("express")();

app.get("/api/hello", (req, res) => {
    res.status(200).send("Hello World after update 🚀")
})

app.get("/api/home", (req, res) => {
    res.status(200).send("Hi there")
})


app.listen(3000, () => {
    console.log('🖥 server running on http://localhost:' + 3000)
})