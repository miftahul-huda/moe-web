var express = require('express');
var router = express.Router();

const LoggerLogic = require('../modules/logic/loggerlogic')


router.post('/create', function (req, res){
  let logger = req.body;

  LoggerLogic.create(logger).then(function (savedLogger)
  {
    res.send(savedLogger);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('', function (req, res){

  LoggerLogic.findAll().then(function (loggers)
  {
    res.send(loggers);
  }).catch(function (err){
    console.log("error")
    console.log(err)
    res.send(err);
  })
})

router.get('/app/:app', function (req, res){

  var app = req.params.app;

  LoggerLogic.findByApplication(app).then(function (loggers)
  {
    res.send(loggers);
  }).catch(function (err){
    console.log("error")
    console.log(err)
    res.send(err);
  })
})

router.get('/type/:type', function (req, res){

  var type = req.params.type;

  LoggerLogic.findByType(type).then(function (loggers)
  {
    res.send(loggers);
  }).catch(function (err){
    console.log("error")
    console.log(err)
    res.send(err);
  })
})

router.get('/app/:app/type/:type', function (req, res){

  var app = req.params.app;
  var type = req.params.type;

  LoggerLogic.findByApplicationAndLogType(app, type).then(function (loggers)
  {
    res.send(loggers);
  }).catch(function (err){
    console.log("error")
    console.log(err)
    res.send(err);
  })
})

router.get('/apps', function (req, res){
  LoggerLogic.findLogApplication().then(function (loggers)
  {
    res.send(loggers);
  }).catch(function (err){
    console.log("error")
    console.log(err)
    res.send(err);
  })
})

router.get('/types', function (req, res){
  LoggerLogic.findLogTypes().then(function (loggers)
  {
    res.send(loggers);
  }).catch(function (err){
    console.log("error")
    console.log(err)
    res.send(err);
  })
})


router.get('/get/:id', function (req, res){
  let id = req.params.id;

  LoggerLogic.get(id).then(function (logger)
  {
    res.send(logger);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.post('/update/:id', function (req, res){
  let logger = req.body;
  let id = req.params.id;

  LoggerLogic.update(id, logger).then(function (savedLogger)
  {
    res.send(savedLogger);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/delete/:id', function (req, res){
  let id = req.params.id;

  LoggerLogic.delete(id).then(function (result)
  {
    res.send(result);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

module.exports = router;
