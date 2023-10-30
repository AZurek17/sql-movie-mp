const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 8080;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connection to mysql
const db = mysql.createConnection(
    {
      // default login
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      // janet's weird login
      // host: '127.0.0.1',
      // user: 'root',
      // password: 'pastel',
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
    let movieValue = req.body.title;
    db.query(`INSERT INTO movies (name) VALUE ?`, movieValue, function (err, results) {
      console.log(results)
    });
        
  })

  app.put('/api/review/:id', (req, res) => {
    let updateReview = req.body.review;
    db.query(`INSERT INTO reviews (name)) VALUE ?`, updateReview, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  })

  app.delete('/api/movie/:id', (req, res) => {
    let deleteMovie = req.body.title;
    db.query(`DELETE FROM movies WHERE id = ?`, deleteMovie, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  })

  app.listen (PORT, () => {
    console.log(`server runnint on port ${PORT}`);
  })
  

