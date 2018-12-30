const winston = require("winston");
const contextService = require('request-context');


const logger = winston.createLogger({
    format: ()=>{
      let id = contextService.get('requestId');
      return {requestId: id}
    },
    defaultMeta: {service: require("../package.json").name},
    transports: [
      new winston.transports.Console()
    ]
  });

module.exports = {
    logger
};