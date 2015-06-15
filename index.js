var requireDirectory = require('require-directory');

function mount(dir){
  var _dir;
  
  if(dir){
    _dir = dir;
  }else{
    var a = __dirname.split('node_modules')
    if(a.length !== 2){
      throw  "mount-tasks ERROR: " + __dirname + "里没有node_modules目录";
    }
    
    _dir = a[0] + "vendor/tasks";
  }
  return requireDirectory(module, _dir);
}

module.exports = mount;