(function() {
    "use strict";

    desc("Default");
    task("default", function() {
        console.log("\n\nBUILD OK");
    });

    desc("Run localhost server");
    task("run", function() {
        jake.exec("node ./node_modules/http-server/bin/http-server ./", { interactive: true }, complete);
    }, { async: true });










}());