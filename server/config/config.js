var path = require('path');

var rootPath = path.normalize(path.join(__dirname, '/../..'));

module.exports = {
    development: {
        rootPath: rootPath,
        db: "mongodb://justinrassier:Oeve6Ne5sG2p@ds053160.mongolab.com:53160/persondb",
        port: process.env.PORT || 8081

    }
};
