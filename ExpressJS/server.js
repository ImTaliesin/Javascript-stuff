import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Sup Bitch</h1>');
    });

app.get("/contact", (req,res) => {
    res.send("Contact me at Taliesin@esotericdevs.com")});


app.get("/about", (req,res) => {
    res.send("I do shit")});
















app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

