const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const yumSchema = new Schema({
	name: String,
	address: {
		street: String,
		zipcode: Number,
	},
	yelp: String,
	items: [{ title: String }, { title: String }],
})

const Yum = mongoose.model('Yum', yumSchema)

module.exports = Yum
