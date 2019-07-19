const Sequelize = require('../index').Sequelize
const sequelize = require('../index').sequelize
const candidates = require('../models/candidates').candidates
const Model = Sequelize.Model;

class Drive extends Model {}
Drive.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
, date:{
    type: Sequelize.DATEONLY
},
  started_by:{
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


},
  {
  sequelize,
  modelName: 'drive',
  timestamps:false
  
});

module.exports={
  Drive
}
// sequelize.sync()
//   .then(() => Drive.create({
    
//   }))