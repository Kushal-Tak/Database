const Sequelize = require('../index').Sequelize
const sequelize = require('../index').sequelize

const Model = Sequelize.Model;
class status extends Model {}
status.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  status_name: {
    type: Sequelize.STRING,
    unique:true

    // allowNull defaults to true
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
  modelName: 'status',
  timestamps:false
  
});

module.exports={
  status
}