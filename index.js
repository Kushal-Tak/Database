const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('DrivePortal', 'admin', 'admin123', {
  host: 'drive-portal.cniw8p6tx7sx.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

// // Option 2: Passing a connection URI
// const sequelize = new Sequelize('localhost:3306');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports={
    Sequelize,
    sequelize
  }

  // candidates
  // .create({ name: 'John Doe'})
  // .then(employee => {
  //   console.log(employee.get('name')); // John Doe (SENIOR ENGINEER)
  //   //console.log(employee.get('title')); // SENIOR ENGINEER
  // })


  