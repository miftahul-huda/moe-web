const { Model, DataTypes } = require('sequelize');

class LoggerModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            logDate: DataTypes.DATE,
            logModule: DataTypes.STRING,
            logContent: DataTypes.STRING,
            logApplication: DataTypes.STRING,
            logType: DataTypes.STRING,
            username: DataTypes.STRING
        }, 
        { sequelize, modelName: 'logger', tableName: 'logger', force: force });
    }
}

module.exports = LoggerModel;