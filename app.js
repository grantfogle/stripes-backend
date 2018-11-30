const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries')

app.get('/', (req, res) => {
    queries.listAll().then(drills => res.send(drills))
})

app.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    queries.getById(id).then(drills => res.send(drills))
})

app.post('/', (req, res) => {
    queries.createDrill(req.body).then(drills => res.send(drills[0]))
})

app.delete('/:id', (req, res) => {
    queries.deleteDrill(req.params.id).then(drills => res.send({ status: 204, message: "it has been deleted" }))
})

app.put('/:id', (req, res) => {
    queries.updateDrill(req.params.id, req.body).then(updatedDrill => res.json(updatedDrill[0]));
})


app.listen(port, console.log(`listening on ${port}!`));