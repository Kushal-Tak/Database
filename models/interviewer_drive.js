// Relationship table: drive - interviewer many to many relationship

const Sequelize = require('../index').Sequelize
const sequelize = require('../index').sequelize
const drive = require('./Drive').Drive
const interviewers= require('./interviewers').interviewers

const Model = Sequelize.Model;

class interviewer_drive extends Model {}

interviewer_drive.init({
  // attributes

  interviewer_id: {   // FK to interviewer
    type: Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: interviewers,
      key: 'id',
     }
    // allowNull defaults to true
  },
  
  drive_id:{      //FK to drive
    type:Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: drive,
      key: 'id',
     }
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
  }
},
  {
  sequelize,
  modelName: 'interviewer_drive',
  timestamps:false
  
});

interviewer_drive.sync({force:true});