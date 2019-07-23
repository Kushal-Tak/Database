const Sequelize = require('../index').Sequelize
const sequelize = require('../index').sequelize
const roles = require('../models/roles').roles
const drive = require('../models/Drive').Drive;

const Model = Sequelize.Model;
class candidates extends Model {}
candidates.init({
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
  }
, 
  applied_role_id:{         // FK to roles
    type:Sequelize.INTEGER,
    references: {
      model: roles,
      key: 'id',
     }
  },
  specialization:{
      type:Sequelize.STRING
  },
  experience:{
    type:Sequelize.STRING
},
    company:{
        type:Sequelize.STRING
    },
    notice_period:{
        type:Sequelize.STRING
    },
    joining_date:{
        type:Sequelize.DATE
    },
    preferred_location:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    contact:{
        type:Sequelize.BIGINT,
        
    },
    arrival_status:{
        type:Sequelize.STRING
    },
    arrival_time:{
        type:Sequelize.DATE
    },
    drive_id:{                  //FK to Drive
        type:Sequelize.INTEGER,
        references: {
          model: drive,
          key: 'id',
         }
  },
    role_alotted:{            // FK to Roles
        type:Sequelize.INTEGER,
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
  modelName: 'candidate',
  timestamps:false
  
});

//candidates.sync({force:true})

module.exports={
  candidates
}

