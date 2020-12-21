var exec = require("child_process").execFile;
const path = require('path');

function start(file_path,switch_status) {
  console.log("Request handler 'start' was called.");
  var exe_file;
  if (process.platform === 'darwin') { exe_file = path.join(__dirname,"data_format_darwin_dev"); }
  if (process.platform === 'win32') { exe_file = path.join(__dirname,"data_format_win32_dev"); }
  exec(exe_file,[file_path,"GBK",switch_status], function (error, stdout, stderr) {
    // console.log("error:\n"+error);
    console.log("stdout:\n"+stdout);
    // console.log("stderr:\n"+stderr);
  });
}

exports.start = start;
