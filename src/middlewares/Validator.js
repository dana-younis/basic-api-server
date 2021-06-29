'use strict';

module.exports = ( req,res,next ) =>{
if(req.query.name){
  next();
  }else{
    next(new Error('Not a string!'));
  }
};