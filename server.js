const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const PORT = 3000
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectionString = 'mongodb+srv://aristotelis:aristotelis-star-wars@cluster0.wqbafcg.mongodb.net/star-wars-quotes?retryWrites=true&w=majority'
let quotesCollection;

MongoClient.connect(connectionString, { 
    useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')

    })
    .catch(error => {
        console.error(error);
    })

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })

    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
            .then(results => {
            console.log(results)
            })
            .catch(error => console.error(error))
        })




app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})