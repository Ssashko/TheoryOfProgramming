let mongoose = require('mongoose');
let schemeModel = {
    group : {type : String, default: ''},
    specialization : {type : String, default: ''},
};
module.exports = {
    scheme: schemeModel,
    model: mongoose.model('Group', schemeModel)
}