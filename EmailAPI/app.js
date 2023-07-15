let express = require('express');
let app = express();
let https = require('https');
let bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
}
);

//When server starts, run this code
app.post('/', function(req, res) {
    let email = req.body.email;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let password = req.body.password;
    let data = {
        members: [
            {
                email_address: email,
                status: 'subscribed', // This can be: Subscribed, unsubscribed, cleaned, pending
                merge_fields: { 
                    FNAME: firstName,
                    LNAME: lastName,
                    //PASSWORD: password
    
                }
            }
        ]
    };

    //Mailchimp API info needed to send data to Mailchimp
    let jsonData = JSON.stringify(data);
    let listId = 'e51249ff7f';
    let server = 'us21';
    let options = {
        method: 'POST',
        auth: "Taliesin:4cbcac88e307354f3cf812bcaeb95137-us21"
    }

    let request = https.request('https://' + server + '.api.mailchimp.com/3.0/lists/' + listId, options, function(response) {
        response.on('data', function(data) {
            console.log(JSON.parse(data));})});

    //Send data to Mailchimp
    request.write(jsonData);
    request.end();

});


//Turn server on
app.listen(6969, function() {
    console.log('Server is running on port 6969');});

//mailchimp API key: 4cbcac88e307354f3cf812bcaeb95137-us21
//Audience ID key: e51249ff7f