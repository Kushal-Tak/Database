// candidate-interviewer mapping by algorithm

const sequelize = require('../index').sequelize
const Sequelize = require('../index').Sequelize

const interviewers = require('./interviewers').interviewers
const roles = require('./roles').roles
const candidates = require('./candidates').candidates
const status = require('./status').status


const Model = Sequelize.Model;
class can_interviewer extends Model {}
can_interviewer.init({
  // attributes
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  can_id: {               // FK to candidate
    type: Sequelize.INTEGER,
    references: {
      model: candidates,
      key: 'id',
     }
    // allowNull defaults to true
  }
, interviewer_id:{        //FK to interviewer
    type: Sequelize.INTEGER,
    references: {
      model: interviewers,
      key: 'id',
     }
},
   status_id: {            // FK to status
    type: Sequelize.STRING,
    references:{
      model:status,
      key:'id'
    }
},
    round:{
     type:Sequelize.INTEGER   
    },

    feedback:{
      type:Sequelize.JSON  
    },
  created_by:{
    type:Sequelize.STRING
  },
  modified_by:{
    type:Sequelize.STRING
  },

  created_at:{
    type:Sequelize.DATE
  },
  modified_at:{
    type:Sequelize.DATE
  },

  role_id:{                 // FK to roles
      type:Sequelize.INTEGER,
      references: {
        model: roles,
        key: 'id',
       }
  },
},
  {
  sequelize,
  modelName: 'can_interviewer',
  timestamps:false 
});

can_interviewer.sync().then(()=>{

  return can_interviewer.create({
      can_id:1,
      interviewer_id:11,
      role_id:2,
      status_id:1

  })
});