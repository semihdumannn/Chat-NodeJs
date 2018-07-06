const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.DB_STRING)
  .then(()=>{
   // console.log('MongoDb bağlantısı sağlandı');
  })
  .catch((err)=>{
    console.log('Bağlantı Hatası : ',err);
  });

  mongoose.Promise = global.Promise;
  
   
};