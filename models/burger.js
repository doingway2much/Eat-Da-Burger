var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
        orm.all("burgers", function(result) {
            cb(result);
        });
    },

};

module.exports = burger;