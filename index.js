var express = require('express');
var app = express();
var path = require('path');
app.use(express.urlencoded());
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Setting assets path
app.use('/assets', express.static(__dirname + '/views/assets/'));
app.use('/bootstrap/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/bootstrap/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/views/js'));
app.use('/css', express.static(__dirname + '/views/css'));
app.use('/pages', express.static(__dirname + '/views/pages'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/add_new', (req, res) => {
	res.render('newEntry');
});

app.get('/history', (req, res) => {
	res.render('history');
})

app.listen(3000, () => {
	console.log('Application is running- localhost:3000');
})