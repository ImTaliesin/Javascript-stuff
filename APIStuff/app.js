let express = require('express');
let app = express();
let https = require('https');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    let query = req.body.cityName;
    let appID = '0654b17cc36d43f952e861cf153dcb53'
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=Imperial&appid=" + appID;
    
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on('data', function(data) {
            let weatherData = JSON.parse(data);
            let temp = weatherData.main.feels_like;
            let weatherDescription = weatherData.weather[0].description;
            let icon = weatherData.weather[0].icon;
            let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
            res.write(`<p>`+query +` is ` + temp + " degrees and is currently experiencing " + weatherDescription + "</p>");
            res.write("<img src=" + iconUrl + ">");
            res.send();
        });
    });
})

app.listen(6969, function() {
    console.log('Example app listening on port 6969!');
});