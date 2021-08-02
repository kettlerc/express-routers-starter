const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books.router');
const moviesRouter = require('./routes/movies.router')

const app = express();
const PORT = process.env.PORT || 5000;

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

//Tell express to use router
app.use('/book', booksRouter);
app.use('/movie', moviesRouter)

// TODO - Move these routes to their own modules!
