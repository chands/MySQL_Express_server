Introduction: Fetch and Insert data from frontend into MySQL database.
Express server integrated with mySQL server, fetches data from mySQL database and sends them to client interface using both statically and dynamically.
Insert data into mySQL database directly from the client interface & display results.

Prerequisites:
you need to have MySQL server running and a database connection to connect to.
database should have an existing table "persons" with columns Id, Name, Age & city.

All you need to do to, to start using this project is,
1. clone this project to your local directory
2. open your local directory in vscode or another editors
3. Install all dependencies using command line in the same directory:
```shell
npm init
npm install mysql2 express hbs
```
Framework/Languages/Libraries: Express, jQuery JavaScript, MySQL, HTML, hbs- Express view engine wrapper for Handlebars.

Routes: used '/api'path for static page and '/pages' path for dynamic pages.

Note: my first webpage connected with mySQL database and express serever.