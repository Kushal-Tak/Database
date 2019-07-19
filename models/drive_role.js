// Relationship table: driive - role many to many relationship

const Sequelize = require('../index').Sequelize
const sequelize = require('../index').sequelize
const drive = require('./Drive').Drive
const roles= require('./roles').roles
const Model = Sequelize.Model;

class drive_role extends Model {}
drive_role.init({
  // attributes

  drive_id: {               //FK to Drive
    type: Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: drive,
      key: 'id',
     }
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
  modelName: 'drive_role',
  timestamps:false
  
});

drive_role.sync();