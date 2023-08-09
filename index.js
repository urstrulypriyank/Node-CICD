const app = require("express")();

app.get("/", (req, res) => {
    res.status(200).send("Hello World 🚀")
})

app.get("/home", (req, res) => {
    res.status(200).send("Hello World from home 🚀")
})
app.listen(process.env.PORT || 3000, () => {
    console.log('🖥 server running on http://localhost:' + (process.env.PORT || 3000))
})