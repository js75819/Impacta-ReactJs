
const restful = require('node-restful');
const Schema = restful.mongoose.Schema 

const contatoSchema = new Schema({
data: { type: Date, require: true},
nome: { type: String, require: true },
email: {type: String, require: true},
telefone: {type: Number},
assunto: { type: String}
});
module.exports = restful.model('contato', contatoSchema);