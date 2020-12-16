const fs = require("fs");
const { Console } = require('console');

class Logger extends Console{
    constructor(config){

        if(!config.successLogsFile)
            throw new Error("successLogsFile is required");

        if(!config.errorLogsFile)
            throw new Error("errorLogsFile is required");
            
        config.stdout = fs.createWriteStream(config.successLogsFile);
        config.stderr = fs.createWriteStream(config.errorLogsFile);

        super(config);

    }

    log(){
        console.log(...arguments)
        super.log(...arguments);
    }

    error(){
        console.error(...arguments)
        super.error(...arguments);
    }
}

module.exports = Logger;