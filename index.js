const app = require("express")();

app.get("/", (req, res) => {
    res.status(200).send("Hello World after update 🚀")
})


app.listen(3000, () => {
    console.log('🖥 server running on http://localhost:' + 3000)
})