let mongoose = require('mongoose')
mongoose.connect('mongodb://stackx:stackx@ds057816.mlab.com:57816/stackx')

let quotesSchema = new mongoose.Schema({
    quotes: String,
    author: String,
    createdAt: Date
})

let Quotes = mongoose.model('quotes', quotesSchema)

module.exports = Stocks
