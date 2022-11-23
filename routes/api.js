const route = require('express').Router();
//this route is on "/api/" path.
const db = require('../db/db');

route.get('/persons', (req, res) => {
    //send all the persons as an array
    //can add some delay(settimeout) artificially for testing.
    db.getAllPersons()
        .then((persons) => res.send(persons))//'persons' will be sent once redirected.
        .catch((err) => res.send({ error: err }))

});

route.post('/persons', (req, res) => {
    //add the person to the table(details are in the body)
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => res.redirect('/api/persons'))//redirect to get all persons data.
        .catch((err) => res.send({ error: err }))
});

exports = module.exports = route;