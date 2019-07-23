const Sequelize = require('../index').Sequelize
const sequelize = require('../index').sequelize
const user_roles = require('../models/user_roles').user_roles

const Model = Sequelize.Model;
class Users extends Model {}

Users.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  user_name: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
, 
  role_id:{         //FK to user_roles
    type:Sequelize.INTEGER,
    references: {
      model: user_roles,
      key: 'id',
     }

  },
  email:{
    type:Sequelize.STRING
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
  modelName: 'user',
  timestamps:false
  
});

// Users.sync({force:true}).then( ()=>{

//     return Users.create({
//         user_name: 'Sameer',
//         role_id:1,
//         email: 'sameer@quantiphi.com'


//     })

// });

module.exports={
  Users
}