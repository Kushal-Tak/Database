const sequelize = require('../index').sequelize
const Sequelize = require('../index').Sequelize


const Model = Sequelize.Model;
class roles extends Model {}

roles.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  role_name: {
    type: Sequelize.STRING,
    allowNull:false,
    unique:true
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
  modelName: 'role',
  timestamps:false
  
});

//roles.sync();

module.exports={
  roles
}
