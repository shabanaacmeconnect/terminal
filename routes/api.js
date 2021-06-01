const express = require('express');
const router = express.Router();
const {executeQuerySelect, executeQueryInsert,executeQueryUpdate}= require('../shared/shared-db');
const passport=require('passport');
module.exports = () => {
router.post('/request', (req, res) => {
  let fields=req.body.data;
  let body=[
    fields[0].M1F1,fields[0].M1F2,fields[0].M1F3,fields[0].M1F4,fields[0].M1F5,fields[0].M1F6,fields[0].M1F7,fields[0].M1F8,fields[0].M1F9,fields[0].M1F10,fields[0].M1F11,fields[0].M1F12,fields[0].M1F13,fields[0].M1F14,fields[0].M1F15,
    fields[1].M2F1,fields[1].M2F2,fields[1].M2F3,fields[1].M2F4,fields[1].M2F5,fields[1].M2F6,fields[1].M2F7,fields[1].M2F8,fields[1].M2F9,fields[1].M2F10,fields[1].M2F11,fields[1].M2F12,fields[1].M2F13,fields[1].M2F14,fields[1].M2F15,
    fields[2].M3F1,fields[2].M3F2,fields[2].M3F3,fields[2].M3F4,fields[2].M3F5,fields[2].M3F6,fields[2].M3F7,fields[2].M3F8,fields[2].M3F9,fields[2].M3F10,fields[2].M3F11,fields[2].M3F12,fields[2].M3F13,fields[2].M3F14,fields[2].M3F15,
    fields[3].M4F1,fields[3].M4F2,fields[3].M4F3,fields[3].M4F4,fields[3].M4F5,fields[3].M4F6,fields[3].M4F7,fields[3].M4F8,fields[3].M4F9,fields[3].M4F10,fields[3].M4F11,fields[3].M4F12,fields[3].M4F13,fields[3].M4F14,fields[3].M4F15,
    fields[4].M5F1,fields[4].M5F2,fields[4].M5F3,fields[4].M5F4,fields[4].M5F5,fields[4].M5F6,fields[4].M5F7,fields[4].M5F8,fields[4].M5F9,fields[4].M5F10,fields[4].M5F11,fields[4].M5F12,fields[4].M5F13,fields[4].M5F14,fields[4].M5F15,
    fields[5].M6F1,fields[5].M6F2,fields[5].M6F3,fields[5].M6F4,fields[5].M6F5,fields[5].M6F6,fields[5].M6F7,fields[5].M6F8,fields[5].M6F9,fields[5].M6F10,fields[5].M6F11,fields[5].M6F12,fields[5].M6F13,fields[5].M6F14,fields[5].M6F15
            ];
            let history=[
             fields[2].M3F1,fields[2].M3F2,fields[2].M3F3,fields[2].M3F4,fields[2].M3F5,fields[2].M3F6,fields[2].M3F7,fields[2].M3F8,fields[2].M3F9,fields[2].M3F10,fields[2].M3F11,fields[2].M3F12,fields[2].M3F13,fields[2].M3F14,fields[2].M3F15,
              fields[4].M5F1,fields[4].M5F2,fields[4].M5F3,fields[4].M5F4,fields[4].M5F5,fields[4].M5F6,fields[4].M5F7,fields[4].M5F8,fields[4].M5F9,fields[4].M5F10,fields[4].M5F11,fields[4].M5F12,fields[4].M5F13,fields[4].M5F14,fields[4].M5F15,
              fields[5].M6F1,fields[5].M6F2,fields[5].M6F3,fields[5].M6F4,fields[5].M6F5,fields[5].M6F6,fields[5].M6F7,fields[5].M6F8,fields[5].M6F9,fields[5].M6F10,fields[5].M6F11,fields[5].M6F12,fields[5].M6F13,fields[5].M6F14,fields[5].M6F15
            ]
      executeQuerySelect('select * from `requests` where M1F1=? AND M1F2=? AND M1F3=? AND M2F6=? ',[fields[0].M1F1,fields[0].M1F2,fields[0].M1F3,fields[1].M2F6],  function(err, result) {
        if (err) return res.status(500).send({status : false,data: err,message:"failed"});
        let updated_at=formatDate()
        if(result.length>0){
          let data={M1F1:fields[0].M1F1,M1F2:fields[0].M1F2,M1F3:fields[0].M1F3,M1F4:fields[0].M1F4,M1F5:fields[0].M1F5,M1F6:fields[0].M1F6,M1F7:fields[0].M1F7,M1F8:fields[0].M1F8,M1F9:fields[0].M1F9,M1F10:fields[0].M1F10,M1F11:fields[0].M1F11,M1F12:fields[0].M1F12,M1F13:fields[0].M1F13,M1F14:fields[0].M1F14,M1F15:fields[0].M1F15,
            M2F1:fields[1].M2F1,M2F2:fields[1].M2F2,M2F3:fields[1].M2F3,M2F4:fields[1].M2F4,M2F5:fields[1].M2F5,M2F6:fields[1].M2F6,M2F7:fields[1].M2F7,M2F8:fields[1].M2F8,M2F9:fields[1].M2F9,M2F10:fields[1].M2F10,M2F11:fields[1].M2F11,M2F12:fields[1].M2F12,M2F13:fields[1].M2F13,M2F14:fields[1].M2F14,M2F15:fields[1].M2F15,
            M3F1:fields[2].M3F1,M3F2:fields[2].M3F2,M3F3:fields[2].M3F3,M3F4:fields[2].M3F4,M3F5:fields[2].M3F5,M3F6:fields[2].M3F6,M3F7:fields[2].M3F7,M3F8:fields[2].M3F8,M3F9:fields[2].M3F9,M3F10:fields[2].M3F10,M3F11:fields[2].M3F11,M3F12:fields[2].M3F12,M3F13:fields[2].M3F13,M3F14:fields[2].M3F14,M3F15:fields[2].M3F15,
            M4F1:fields[3].M4F1,M4F2:fields[3].M4F2,M4F3:fields[3].M4F3,M4F4:fields[3].M4F4,M4F5:fields[3].M4F5,M4F6:fields[3].M4F6,M4F7:fields[3].M4F7,M4F8:fields[3].M4F8,M4F9:fields[3].M4F9,M4F10:fields[3].M4F10,M4F11:fields[3].M4F11,M4F12:fields[3].M4F12,M4F13:fields[3].M4F13,M4F14:fields[3].M4F14,M4F15:fields[3].M4F15,
            M5F1:fields[4].M5F1,M5F2:fields[4].M5F2,M5F3:fields[4].M5F3,M5F4:fields[4].M5F4,M5F5:fields[4].M5F5,M5F6:fields[4].M5F6,M5F7:fields[4].M5F7,M5F8:fields[4].M5F8,M5F9:fields[4].M5F9,M5F10:fields[4].M5F10,M5F11:fields[4].M5F11,M5F12:fields[4].M5F12,M5F13:fields[4].M5F13,M5F14:fields[4].M5F14,M5F15:fields[4].M5F15,
            M6F1:fields[5].M6F1,M6F2:fields[5].M6F2,M6F3:fields[5].M6F3,M6F4:fields[5].M6F4,M6F5:fields[5].M6F5,M6F6:fields[5].M6F6,M6F7:fields[5].M6F7,M6F8:fields[5].M6F8,M6F9:fields[5].M6F9,M6F10:fields[5].M6F10,M6F11:fields[5].M6F11,M6F12:fields[5].M6F12,M6F13:fields[5].M6F13,M6F14:fields[5].M6F14,M6F15:fields[5].M6F15,
            updated_at:updated_at};
          var query=executeQueryUpdate('UPDATE `requests` SET ? where `req_id`=?',
          [data,result[0].req_id],  function(err1, result1) {
            if (err1) return res.status(500).send({status : false,data: err1,message:"failed"});
            history.push(result[0].req_id)
            insertData(history,function(err2,prior){
              if (err2) return res.status(500).send({status : false,data: err1,message:"failed"});
               res.status(200).send({
                  status : true,
                  message:"success"
                });
            })
          });
        }else{
          var query=executeQueryInsert('INSERT INTO `requests`( `m1f1`,`m1f2`,`m1f3`,`m1f4`,`m1f5`,`m1f6`,`m1f7`,`m1f8`,`m1f9`,`m1f10`,`m1f11`,`m1f12`,`m1f13`,`m1f14`,`m1f15`,`m2f1`,`m2f2`,`m2f3`,`m2f4`,`m2f5`,`m2f6`,`m2f7`,`m2f8`,`m2f9`,`m2f10`,`m2f11`,`m2f12`,`m2f13`,`m2f14`,`m2f15`,`m3f1`,`m3f2`,`m3f3`,`m3f4`,`m3f5`,`m3f6`,`m3f7`,`m3f8`,`m3f9`,`m3f10`,`m3f11`,`m3f12`,`m3f13`,`m3f14`,`m3f15`,`m4f1`,`m4f2`,`m4f3`,`m4f4`,`m4f5`,`m4f6`,`m4f7`,`m4f8`,`m4f9`,`m4f10`,`m4f11`,`m4f12`,`m4f13`,`m4f14`,`m4f15`,`m5f1`,`m5f2`,`m5f3`,`m5f4`,`m5f5`,`m5f6`,`m5f7`,`m5f8`,`m5f9`,`m5f10`,`m5f11`,`m5f12`,`m5f13`,`m5f14`,`m5f15`,`m6f1`,`m6f2`,`m6f3`,`m6f4`,`m6f5`,`m6f6`,`m6f7`,`m6f8`,`m6f9`,`m6f10`,`m6f11`,`m6f12`,`m6f13`,`m6f14`,`m6f15`) VALUES ? ',
          [body],
          function(err1, result1) {
            if (err1) return res.status(500).send({status : false,data: err1,message:"failed"});
            history.push(result1.insertId)
            insertData(history,function(err2,prior){
              if (err2) return res.status(500).send({status : false,data: err2,message:"failed"});
                res.status(200).send({
                  status : true,
                  message:"success"
                });
              })
            });
        }
      })
 
});
function insertData(data,cb){
let body=data;
  var query=executeQueryInsert('INSERT INTO `history`(`m3f1`,`m3f2`,`m3f3`,`m3f4`,`m3f5`,`m3f6`,`m3f7`,`m3f8`,`m3f9`,`m3f10`,`m3f11`,`m3f12`,`m3f13`,`m3f14`,`m3f15`,`m5f1`,`m5f2`,`m5f3`,`m5f4`,`m5f5`,`m5f6`,`m5f7`,`m5f8`,`m5f9`,`m5f10`,`m5f11`,`m5f12`,`m5f13`,`m5f14`,`m5f15`,`m6f1`,`m6f2`,`m6f3`,`m6f4`,`m6f5`,`m6f6`,`m6f7`,`m6f8`,`m6f9`,`m6f10`,`m6f11`,`m6f12`,`m6f13`,`m6f14`,`m6f15`,req_id) VALUES ? ',
    [body],
    function(err1, result1) {
      if(err1) return cb(err1,'') 
      else return cb(null,result1)
      })
}
router.post('/history', (req, res) => {
 let query='select r.m1f1,r.m1f2,r.m1f3,r.m1f4,r.m1f5,r.m1f6,r.m1f7,r.m1f8,r.m1f9,r.m1f10,r.m1f11,r.m1f12,r.m1f13,r.m1f14,r.m1f15,r.m2f1,r.m2f2,r.m2f3,r.m2f4,r.m2f5,r.m2f6,r.m2f7,r.m2f8,r.m2f9,r.m2f10,r.m2f11,r.m2f12,r.m2f13,r.m2f14,r.m2f15, r.m2f6, history.*,r.m4f1,r.m4f2,r.m4f3,r.m4f4,r.m4f5,r.m4f6,r.m4f7,r.m4f8,r.m4f9,r.m4f10,r.m4f11,r.m4f12,r.m4f13,r.m4f14,r.m4f15 from `requests` as r right join history on history.req_id=r.req_id where 1 '
 let query1='select r.m1f1,r.m1f2,r.m1f3,r.m2f6, history.*,count(history.h_id) as count from `requests` as r right join history on history.req_id=r.req_id where 1 '
let url=''
 let params=[]
 if(req.query.Family){
  url+='and r.m1f1=?';
  params.push(req.query.Family)
 }
 if(req.query.TerminalID){
  url+='and r.m1f2=?';
  params.push(req.query.TerminalID)
 }
 if(req.query.Application){
  url+='and r.m1f3 like "'+req.query.Application+'*%'+'"';
  // params.push(req.query.Application)
 }
 if(req.query.Version){
  url+='and r.m1f3 like "%*'+req.query.Version+'"';
    // params.push(req.query.Version)
 }
 if(req.query.PTID){
  url+='and r.m2f6=?';
  params.push(req.query.PTID)
 }
 if(req.query.SNO){
  url+='and r.m2f6=?';
  params.push(req.query.SNO)
 }
 if(req.query.OS){
  url+='and history.m3f1=?';
  params.push(req.query.OS)
 }
 if(req.query.EOS){
  url+='and history.m3f2=?';
  params.push(req.query.EOS)
 }
 if(req.query.EMV_Version){
  url+='and history.m3f4=?';
  params.push(req.query.EMV_Version)
 }
 if(req.query.ADK_Version){
  url+='and history.m3f5=?';
  params.push(req.query.ADK_Version)
 }
 if(req.query.CTLS_Version){
  url+='and history.m3f6=?';
  params.push(req.query.CTLS_Version)
 }
 
 if(req.query.CreatedDate1){
  url+='and DATE(history.created_at) >= DATE(?)'
  params.push(req.query.CreatedDate1)
 }
 if(req.query.CreatedDate2){
  url+='and DATE(history.created_at) <= DATE(?)'
  params.push(req.query.CreatedDate2)
 }
 if(req.query.UpdatedDate1){
  url+='and DATE(history.created_at) >= DATE(?)'
  params.push(req.query.UpdatedDate1)
 }
 if(req.query.UpdatedDate2){
  url+='and DATE(history.created_at) <= DATE(?)'
  params.push(req.query.UpdatedDate2)
 }
 let limit = req.query.size
 if (!req.query.size) limit = 1
 else limit = req.query.size
 let page = req.query.page
 if (!req.query.page) page = 1
 else page = req.query.page
 const offset = (page - 1) * limit;
 let condition = ' Limit ' + limit + ' OFFSET ' + offset

 executeQuerySelect(query+url+condition,params,
  function(err, result) {
      if (err) return res.status(500).send({status : false,data: err,message:"failed"});
      executeQuerySelect(query1 + url, params, function (err1, result1) {
        if (err) res.status(500).send({ status: false, data: err1, message: "Some Error Occured" });
        res.status(200).send({ status: true, data: result, elementCount: result1 ? result1[0]['count'] : 1, message: "success" });
    })
    });
});
router.post('/details', (req, res) => {
  var query=executeQuerySelect('select * from `requests` where req_id=1 ',
  function(err, result) {
      if (err) return res.status(500).send({status : false,data: err,message:"failed"});
      if(result.length>0)
      res.status(200).send({
        status : true,
        data: result[0],
        message:"success"
      });
      else
      res.status(200).send({
        status : true,
        data: result,
        message:"No details found"
      });
    });
});
return router;
}
function formatDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
const uuidAPIKey = require('uuid-apikey');
// console.log(uuidAPIKey.create())
// var checkApiKey = function(req, res, next) {
//   let hashed_api_key = uuidAPIKey.toUUID(req.body.apiKey);
//   let authCheck = uuidAPIKey.check(req.body.apiKey,'3e7ebf2d-6578-48b9-8b35-3efef39a756c');
//   if(authCheck!=true){
//     res.send(401).send('Unauthorized')
//   }
//   console.log(authCheck)
//   next();
// };