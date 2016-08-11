var liveServer = require("live-server");

liveServer.start({
    port : 3000,
    ignore : '.idea,node_modules',
    file : "index.html", // When set, serve this file for every 404 (useful for single-page applications).
    wait : 500,
    logLevel : 2
});