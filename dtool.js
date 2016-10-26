var fs = require('fs');
var path = require('path');

/**
 * 筛除'.'开头的隐藏文件
 * 如'.DS_Store'
 */
var regDotFile = function(ele){
   return /^[^\.]/g.test(ele);
}
var rmdot = function(ary){
   return ary.filter(regDotFile);
}
exports.rmdot = rmdot;

 /**
  * get:当前目录下所有文件夹
  * http://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
  */
var subdir = function(src) {
  return rmdot(fs.readdirSync(src))
    .filter(function(file){
      return fs.statSync(path.join(src,file)).isDirectory();
    })
}
exports.subdir = subdir;

/**
 * get:当前目录下所文件
 */
var subfile = function(src) {
  return rmdot(fs.readdirSync(src))
    .filter(function(file){
      return fs.statSync(path.join(src,file)).isFile();
    })
}
exports.subfile = subfile;
