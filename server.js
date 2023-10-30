const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connection to mysql
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'movies_mini_db'
    },
    console.log(`Connected to the movies_mini_db database.`)
  );

  //querys

  

  

 app.get('/api/movies', (req, res) => {
    db.query(`SELECT * FROM movies`, function (err, results) {
        console.log(results);
      })
 })
 app.get('/api/movie-reviews', (req, res) => {
    db.query(`SELECT * FROM reviews`, function (err, results) {
        console.log(results);
      })
 })

  app.post('/api/add-movie', (req, res) => {
    db.query(`INSERT INTO movies (name) FROM reviews ?`);
        
      
  })


  app.listen (PORT, () => {
    console.log(`server runnint on port ${PORT}`);
  })
  

