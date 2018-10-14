(function() {
    "use strict";

    var linter = require("simplebuild-jshint");
    var karma = require("simplebuild-karma");
    var KARMA_CONFIG = "karma.conf.js";

    desc("Default");
    task("default", [ "lint" ], function() {
        console.log("\n\nBUILD OK");
    });

    desc("Run localhost server");
    task("run", function() {
        jake.exec("node ./node_modules/http-server/bin/http-server ./", { interactive: true }, complete);
    }, { async: true });

    desc("Lint Everything");
    task("lint", function() {
        console.log("Linting JavaScript:");

        linter.checkFiles({
            files: [ "Jakefile.js", "./js/script.js"],
            options: {
                bitwise: true,
                eqeqeq: true,
                forin: true,
                freeze: true,
                futurehostile: true,
                latedef: "nofunc",
                noarg: true,
                nocomma: true,
                nonbsp: true,
                nonew: true,
                strict: true,
                undef: true,
    
                node: true,
                browser: true
            },
            globals: {
                complete: false,
                describe: false,
                desc: false,
                task: false,
                fail: false,
                it: false,
                before: false,
                after: false,
                beforeEach: false,
                afterEach: false,
                jake: false,
                directory: false
            }
        }, complete, fail);
    }, { async: true });

    desc("Run Karma");
    task("karma", function() {
        console.log("Starting Karma server:");
        karma.start({
            configFile: KARMA_CONFIG
        }, complete, fail);
    }, { async: true });

    desc("Run Tests");
    task("test", function() {
        console.log("Testing JavaScript:");
        karma.run({
            configFile: KARMA_CONFIG,
            strict: !process.env.loose
        }, complete, fail);
    }, { async: true });                






}());