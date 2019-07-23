const roles = require('../models/roles').roles
const {Feed} = require('../DataFeed/feed')

const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('./client_secret.json');

const spreadsheet_id='1x5V7-XL5Yo2uPcG1S0Di5Sf0A88DL5BK7M2ruSWNic0';    // Interviewers ID
//const spreadsheet_id='16Wr_rTolxSc2ZMmP8XppUCalEptJCrVvZipYzlKbFTY';    // Candidates
//const spreadsheet_id='1TFzYPEBF2yo3jm_XkrKoipu7n3SE2OjhUSv59EfE9l4';    // Drive Info
//const spreadsheet_id='1MZQ-jgCj002X5GVuXn5wWGFzrJ-0Gc8al4SwrSJ2I1Y';      // Roles

class Manager 
{
  
    constructor (id)
    {
     var doc = new GoogleSpreadsheet(spreadsheet_id);
    var title='';
        this.managerService(doc,title);
        console.log("hellllllo")
    }

    managerService(doc,title)
    {
      console.log("hellllllo")
    doc.useServiceAccountAuth(creds, async function (err) {

     doc.getInfo(function(err, info) {
        title=info.title;
        console.log('Title: '+ title)
       let feed= new Feed();

        switch(title)
        {
        case 'Roles': console.log('Role Spreadsheet')
                       feed.feedRoles(doc);
                       break;
        
        case 'Candidate Details': console.log('Candidate Sheet')
                                 feed.feedCandidates(doc)
                                  break;

        case 'DriveInfo': feed.feedDrive(doc);
                           break;

        case 'Interviewer': feed.feedInterviewers(doc);
        }
      })

  });
}
}

  let obj = new Manager('16Wr_rTolxSc2ZMmP8XppUCalEptJCrVvZipYzlKbFTY');
  module.exports={
      Manager
  }
