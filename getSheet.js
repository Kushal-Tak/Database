var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var mysql = require('mysql')


// var connection = mysql.createConnection({
//     host: ' drive-portal.csd4ynfee8hw.us-east-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'admin123',
//     database: 'DrivePortal'
//   })
// connection.connect(()=>{console.log("connected")})


var doc = new GoogleSpreadsheet('16Wr_rTolxSc2ZMmP8XppUCalEptJCrVvZipYzlKbFTY');
doc.useServiceAccountAuth(creds, function (err) {


  doc.getRows(1, function (err, rows) {
    
    console.log(rows[0].name);
  });
});

