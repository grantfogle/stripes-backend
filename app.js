const express = require('express');
var bcrypt = require('bcryptjs');
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries');
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    queries.listAll().then(drills => res.send(drills))
})

app.get('/drills/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    queries.getById(id).then(drills => res.send(drills))
})

app.post('/', (req, res) => {
    queries.createDrill(req.body).then(drills => res.send(drills[0]))
})

app.delete('/drills/:id', (req, res) => {
    queries.deleteDrill(req.params.id).then(drills => res.send({ status: 204, message: "it has been deleted" }))
})

app.put('/drills/:id', (req, res) => {
    queries.updateDrill(req.params.id, req.body).then(updatedDrill => res.json(updatedDrill[0]));
})


app.get('/users', (req, res) => {
    queries.getAllUsers().then(users => res.send(users))
    // queries.getUser(req.body, req, body.username).then(response => {
    //     bcrypt.compare(password, matchedUser.password)
    // }
})

app.post('/users/login', (req, res) => {
    const { username, password } = req.body;
    return queries.getUser(username).then(user => {
        console.log(user)
        if (user.length === 0) {
            res.send('User not found')
            throw new Error('User not found')
        };
        return bcrypt.compare(password, user[0].password)
            .then(isGood => {
                if (isGood) {
                    return res.send(user);
                }
                return { notFound: true }
            })
    });
})

app.post('/users/signup', (req, res) => {
    console.log(req.body);
    const { username, password, belt, email, firstName, lastName } = req.body;
    const matchedUser = queries.getUser(username);

    if (matchedUser) throw new Error('User already exists')
    //hash password and create
    let hash = bcrypt.hashSync(password, 10);
    let newUser = {
        user_name: username,
        email,
        first_name: firstName,
        last_name: lastName,
        password: hash,
        belt_level: belt,
    }
    queries.createUser(newUser).then(response => res.send({ response: response, message: "User Successfully created!" }));
})


app.listen(port, console.log(`listening on ${port}!`));