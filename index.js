var env = process.env.NODE_ENV || 'dev';
var express = require('express');
var app = express();
var mysql =  require('mysql');
var database = require('./config/database.json')[env];
var connection = mysql.createConnection({
	host : database.host,
	user : database.user,
	password: database.password,
	database : database.database
});
	bodyParser = require('body-parser');
connection.connect();

var Home = require('./routes/home'), // untuk memanggil variabel selanjutnya pakai koma
	home = new Home();

var Buku = require('./routes/buku'), // untuk memanggil variabel selanjutnya pakai koma
	buku = new Buku(connection);

app.set('view engine','pug');
app.set('views','./views');
app.use('/bower',express.static('./bower_components'));
app.use(bodyParser.urlencoded({
	extended : true
}));

// barurieorowei

app.get("/",home.index);
app.get("/buku",buku.index);
app.get("/buku/tambah",buku.tambah);
app.post("/buku/tambah",buku.saveTambah);
app.get("/buku/:id/edit",buku.edit);
app.post("/buku/:id/edit",buku.saveEdit);
app.get("/buku/:id/delete",buku.delete);

app.use((req,res)=> {
		 res.status(404);
		 res.render('notfound');
});
app.listen(3000,()=>console.log('Aplikasi berjalan di port 3000'));