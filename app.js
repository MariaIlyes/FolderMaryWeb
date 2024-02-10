import express from 'express'
import mysql  from 'mysql2'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;

// Conectare la baza de date MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Parola ta de la MySQL
    database: 'maria' // Numele bazei de date pe care ai creat-o
});

// Conectarea la baza de date
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectat la baza de date MySQL');
});

app.set('view engine', 'ejs');
// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Rute
app.get('/', (req, res) => {
    res.render('index');
});

app.get("/bou/vaca",(req, res)=>{
    console.log("Muuuuuu !");
    res.render('vaca', { } );
});

app.get('/produse', (req, res) => {
    // Execută o interogare SELECT pentru a recupera toate produsele din tabelul 'produse'
    db.query('SELECT * FROM produse', (err, result) => {
        if (err) {
            throw err;
        }
        console.log("Rezultatul executiei query este:" + result);
        res.render('produse', { produse: result });
    });
});

// Pornirea serverului
app.listen(port, () => {
    console.log(`Serverul rulează la adresa http://localhost:${port}`);
});
