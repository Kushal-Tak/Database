const roles = require('../models/roles').roles;
const candidates = require('../models/candidates').candidates
const drive = require('../models/Drive').Drive
const interviewers = require('../models/interviewers').interviewers
const users = require('../models/users').Users
const interviewer_role = require('../models/interviewer_role').interviewer_role


// using map for fetching role id corresponding to role names
let map = new Map();
roles.findAll().then(roles => {

    roles.map(role => {
        if (!map.has('role.role_name'))
            map.set(role.role_name, role.id);
    })

});



class Feed {
    feedRoles(doc) {
        doc.getRows(1, function (err, rows) {
            let data=[];

            rows.map(row => {
                console.log(row);
                
                let temp = {'role_name': row.rolename, 'created_by':row.createdby}
                data.push(temp);           
            });
            console.log(data)
            roles.bulkCreate(data);
        });
    }


    feedCandidates(doc) {
        doc.getRows(1, function (err, rows) {

            let data=[]

            rows.map(row => {

                let temp = {name : row.name,
                             applied_role_id: map.get(row.role),
                             specialization: row.specialization,
                             experience: row.experience,
                             company: row.company,
                             notice_period: row.noticeperiod,
                             preferred_location: row.preferredlocation,
                             email: row.email,
                             contact: row.contact,
                             drive_id: row.driveid
                            }
                data.push(temp)    
            });

            console.log(data)
            candidates.bulkCreate(data);
        });
    }


    feedDrive(doc) {
        doc.getRows(1, function (err, rows) {

            let data=[];

            rows.map(row => {
                let temp={
                    name: row.name,
                    location: row.location,
                    started_by: row.startedby
                }
                data.push(temp)
            });
            drive.bulkCreate(data)
        });
    }

    feedInterviewers(doc) {
        doc.getRows(1, function (err, rows) {
            let data=[];
            let userid;
            rows.map(async (row) => {
                
                //To fetch User ID of interviewer
                await users.findOne({ where: { email: row.email } }).then(res => {
                    userid = res.dataValues.id//res.id;
                  //  console.log(res.dataValues.id);
                })
                let temp= {
                    name: row.name,
                    myoe: row.myoe,
                    profile: row.profile,
                    round: row.rounds,
                    user_id: userid,
                    email:row.email
                }
               // console.log(temp.name)
                await data.push(temp);
                let role_array = row.role.split(',');    
               // console.log("ROLE"+role_array)          
                new Feed().feedInter_Roles(role_array,userid);
            });

            // setTimeout( ()=>{
            //     interviewers.bulkCreate(data)
            // },9000)
           
 
        });
    }

    
    feedInter_Roles(role_array,userid) {
        // store info of roles of each interviewer

        role_array.map((i)=>{

            let id = map.get(i)
            console.log("???????????????????"+id);
            interviewer_role.create({
                interviewer_id: userid,
                role_id : id
                
            })
        })
    }
}

module.exports = {
    Feed
}