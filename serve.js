// https://github.com/tapio/live-server
var liveServer = require("live-server");

liveServer.start({
    port : 3000,
    ignore : '.git,.idea,node_modules',
    wait : 500,
    logLevel : 2
});