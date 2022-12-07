let mongoose = require('mongoose');
let schemeModel = {
    name : {type : String, default: ''},
    surname : {type : String, default: ''},
    birthday : {type : Date, default: ''},
    group : {type : String, default: 0}
};
module.exports = {
    scheme: schemeModel,
    model: mongoose.model('Student', schemeModel)
}