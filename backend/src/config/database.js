const mongoose = require('mongoose')
mongoose.Promisse = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' é menor que o limite permitido de {MIN}."
mongoose.Error.messages.Number.max = "O valor '{VALUE}' é maior que o limite permitido de {MAX}."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo {PATH}"