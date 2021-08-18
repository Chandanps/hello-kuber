const app = require('express')()
const port = 18080

app.get('/', (req, res) => {
    let result = 'Hello ' + process.env.USER
    res.send(result)
})

app.listen(port, (err) => {
    if(err) throw err
    else console.log(`Server started at localhost:${port}`)
})
