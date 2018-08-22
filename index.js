

const express = require('express')
const path = require('path')
const exphbs  = require('express-handlebars')
const PORT = process.env.PORT || 5000

var exphbs=require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*app.get('/', function (req, res) {
    res.render('home');
});*/

//app.listen(3000);


 app.get('/', (req, res) => res.render('home'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
/*app.listen(3000,function(){
    console.log('express localhost:' );
    
});
*/