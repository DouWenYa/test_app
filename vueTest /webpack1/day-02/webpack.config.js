 module.exports = {
     entry:{
         bundle1:"./index1.js",
         bundle2:"./index2.js",
     },
     output:{
         path:__dirname,
         filename:'[name].js'
     }
 }