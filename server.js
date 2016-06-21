//timestamp_microservice
//FCC API Basejump: Timestamp microservice
'use strict';
var ejs = require('ejs');
var express = require('express');

//var routes = require('./app/routes/index.js');

//var passport = require('passport');
//var session = require('express-session');

var moment = require('moment');

var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
//var path = require('path');
//require('dotenv').load();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use('/', express.static(process.cwd() + '/')); 
      
var port = process.env.PORT || 8080; 


app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

app.post("/", function (req, res) {
    console.log(req.body.date);
        
var date = req.body.date;
		
var unix = "null"; 
		
var natural = "null"; 

		
if (date >= 0) { 
		        
unix = date; 
		        
natural = moment.unix(unix).format("MMMM D, YYYY");
		        
}  


       
if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) 
{ 
            unix = moment(date, "MMMM D, YYYY").format("X");
            
natural = moment.unix(unix).format("MMMM D, YYYY");
            
       		
console.log('Date: TRUE: ' + unix);
    		
console.log('Date: TRUE: ' + natural);
         
} 
       
 else{
       		
console.log('Date: FALSE: ' + date);
       
}
    
 var checkedDateObj = [{ 
 	"unix": unix, 
 "natural": natural }
    ];
 
 
//res.send(checkedDateObj); 

var tagline = "Date info: ";

res.render('pages/index', {
        unix : unix,
        natural: natural,
        tagline: tagline
    });

});

app.listen(port,  function () 
{
	
console.log('Node.js ... HERE ... listening on port ' + port + '...');

});