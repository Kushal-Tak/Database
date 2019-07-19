const Sequelize = require('../index').Sequelize
const sequelize = require('../index').sequelize
const Model = Sequelize.Model;

class user_roles extends Model {}
user_roles.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
  },
  role_name: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
, 
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
  modelName: 'user_role',
  timestamps:false
  // options
  
});

//user_roles.sync()

module.exports={
  user_roles
}