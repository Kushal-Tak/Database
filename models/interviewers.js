const sequelize = require('../index').sequelize
const Sequelize = require('../index').Sequelize
const users =  require('../models/users').Users

const Model = Sequelize.Model;

class interviewers extends Model {}

interviewers.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  email:{
    type: Sequelize.STRING
  } ,
  myoe:{
    type:Sequelize.INTEGER
  },
  
  profile:{
    type:Sequelize.STRING
  },
    round:{
        type:Sequelize.STRING
    },
    user_id:{                 //FK to users
        type:Sequelize.INTEGER,
        references: {
          model: users,
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
  modelName: 'interviewer',
  timestamps:false
  
});

module.exports={
  interviewers
}


//interviewers.sync();
  