// require('dotenv').config
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const PORT = 3000
const app = express();


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(express.json())



MongoClient.connect(connectionString,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')

        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
                .then(results => {
                    console.log(results)
                    res.render('index.ejs', { quotes: results })
                })
                .catch(error => console.error(error))
        })

        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })

        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
                { name: 'Yoda' }, 
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote
                    }
                }, 
                { upsert: true }
            )
            .then(result => {
                res.json('Success')
                console.log(result)
            })
            .catch(error => console.error(error))
        })


    })
    .catch(error => {
        console.error(error);
    })


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})
