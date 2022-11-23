const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8090,
    database: 'mytestdb',
    user: 'myUser',
    password: 'myPass'
});

function addNewPerson(name, age, city) {
    return new Promise((resolve, reject) => {
        connection.query(
            //bad practice: prone to SQL injection.
            //if anyone gave "Patna; DROP TABLE persons;" at the place of a city name boom,
            //you may endup with compromised database or even deleted DB."
            // `INSERT INTO persons (name, age, city) VALUES (
            //     ${name}, ${age}, ${city}
            // )`,
            //Alternatively: "concept of senitization:" prevents SQL injections.
            `INSERT INTO persons (name, age, city) VALUES (?, ?, ?)`,
            [name, age, city],
            //here user inputs is placed into the array & one by one value from array is taken,
            //while making sure it won't harm our existing databases, and kept @ "?" placeholder for DB;
            //won,t have to do it manually mysql2 does that. just provide array with data.
            (err, rows) => {
                if (err) reject(err);
                else resolve();//no need to provide the result data into resolve here not required.
            }
        )
    })
}

function getAllPersons() {

    return new Promise((resolve, reject) => {
        connection.query(
            //select * from persons table already created on database.
            `SELECT * FROM persons`,
            (err, rows, cols) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                    //rows gives an array so use directly
                }
            }
        )
        //don't close connection it should wait for further inputs from user
        //or user is refreshing the page so they would be able to fetch it
        //regurarly and update the table.
        //NOTE: if you are running a script which is going to run only once then close the connection.
    });
}

exports = module.exports = {
    getAllPersons,
    addNewPerson
};
