const { version } = require('mongoose');

require('dotenv').config();

 const config = {

     port: process.env.PORT || 5000,

      mongodb:{
            uri: process.env.MONGO_URI || 'mongodb://localhost:27017/layered-arch'

      },

       api: {
         prefix: '/api',
         version: 'v1'
       },
        cors:{
             origin: process.env.CORS_ORIGIN || '*',
              Credentials:true
        }
 }
  module.exports = config;