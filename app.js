const express = require('express');
var bcrypt = require('bcryptjs');
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries');


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

app.post('/users/signup', (req, res) => {
    const { username, password, belt, email, firstname, lastname } = req.body;
    const matchedUser = queries.getUser(username);

    if (matchedUser) throw new Error('User already exists')
    //hash password and create
    let hash = bcrypt.hashSync(password, 10);
    let newUser = {
        user_name: username,
        email,
        first_name: firstname,
        last_name: lastname,
        password: hash,
        beltLevel: belt,
    }
    queries.createUser(newUser).then(response => res.send("User Successfully created!"));
})

app.get('/users/', (req, res) => {

    queries.getUser(req.body, req, body.username).then(response => {
        bcrypt.compare(password, matchedUser.password)
    })

    //handle password here
    //handle username here
})


app.listen(port, console.log(`listening on ${port}!`));