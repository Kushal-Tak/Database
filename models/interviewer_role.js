// Relationship table: interviewer - role many to many relationship

const Sequelize = require('../index').Sequelize
const sequelize = require('../index').sequelize
const interviewers = require('../models/interviewers').interviewers
const roles = require('./roles').roles

const Model = Sequelize.Model;
class interviewer_role extends Model {}
interviewer_role.init({
  // attributes

  interviewer_id: {       //FK to interviewers
    type: Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: interviewers,
      key: 'user_id',
     }
    // allowNull defaults to true
  },
  
  role_id:{           // FK to roles
    type:Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: roles,
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
  modelName: 'interviewer_role',
  timestamps:false
  
});

interviewer_role.sync({force:true})

module.exports={
  interviewer_role
}