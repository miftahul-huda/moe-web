const LoggerModel  = require( '../models/loggermodel')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/authentication.sqlite'
});

class LoggerLogic {

    static async create(log)
    {
        let result = this.validateCreate(log);
        if(result.success){
            try {
                let newlog = await LoggerModel.create(log);
                result.payload = newlog;
                return  result;
            }
            catch(error)
            {
                throw { success: false, message: '', error: error };
            }
            
        }
        else
        {
            throw result
        }

    }

    static async findAll()
    {
        try{
            let logs  = await LoggerModel.findAll({
                order:[
                    ['logDate', 'DESC']
                ]
            })
            return { success: true, payload: logs }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findLogApplication()
    {
        try{
            let logs  = await LoggerModel.findAll({attributes: [ [sequelize.fn('DISTINCT', sequelize.col('logApplication')), 'logApplication']]}, { plain: false });
            return { success: true, payload: logs }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findLogTypes()
    {
        try{
            let logs  = await LoggerModel.findAll( {attributes: [ [sequelize.fn('DISTINCT', sequelize.col('logType')), 'logType']]}, { plain: false });
            return { success: true, payload: logs }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findByApplication(appname)
    {
        try{
            let logs  = await LoggerModel.findAll({
                where:{
                    
                    logApplication: {[Op.like] : '%' + appname + '%'}
                }
                ,
                order:[
                    ['logDate', 'DESC']
                ]
            })
            return { success: true, payload: logs }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findByType(type)
    {
        try{
            let logs  = await LoggerModel.findAll({
                where:{
                    logType: {[Op.like] : '%' + type + '%'}
                }
                ,
                order:[
                    ['logDate', 'DESC']
                ]
            })
            return { success: true, payload: logs }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findByApplicationAndLogType(appname, logType)
    {
        try{
            let logs  = await LoggerModel.findAll({
                where:{
                    [Op.and] :
                    {
                        logType: logType,
                        logApplication: {[Op.like]: '%' + appname + '%'}
                        
                    }
                }
                ,
                order:[
                    ['logDate', 'DESC']
                ]
            })
            return { success: true, payload: logs }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findByKeyword(search)
    {
        try{
            let logs  = await LoggerModel.findAll({
                where: {
                    [Op.or] : [
                        {logname: { [Op.like] : '%' + search.logname + '%' }},
                        {logdescription: { [Op.like] : '%' + search.firstname + '%' }}
                    ]

                }
            })
            return { success: true, payload: logs }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async get(id)
    {
        try{
            let log  = await LoggerModel.findByPk(id);

            return { success: true, payload: clone }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async update(id,  log)
    {
        let result = this.successate(log);
        console.log(id)
        if(result.success){
            try {
                let newlog = await LoggerModel.update(log, { where:  { id: id }  });
                result.payload = newlog;
                return  result;
            }
            catch(error)
            {
                throw { success: false, message: '', error: error };
            }
            
        }
        else
        {
            throw result
        }

    }

    static async delete(id)
    {
        try{
            let log  = await LoggerModel.findByPk(id);
            let result = await LoggerModel.destroy(log);
            return { success: true, payload: result }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static validateCreate(log){
        
        return this.validate(log);
    }

    static validate(log)
    {   
        return {success :  true, message: "Succesfull"}
    }
}

module.exports = LoggerLogic;