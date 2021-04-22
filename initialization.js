const LoggerModel  = require( './modules/models/loggermodel')

const { Sequelize, Model, DataTypes } = require('sequelize');
const process = require('process');




const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: process.env.DBENGINE  
});


class Initialization {
    static async initializeDatabase(){

        let force = false;

        //LoggerModel.initialize(sequelize, force);

        await sequelize.sync({ logging: false });
    }
}

module.exports = Initialization



