const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const suverySchema = new Schema({
	title: String,
	subject: String,
	body: String,
	recipients: [RecipientSchema],
	yes: {
		type: Number,
		default: 0,
	},
	no: {
		type: Number,
		default: 0,
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	dateSent: Date,
	lastResponded: Date,
});

const Survey = mongoose.model('surveys', suverySchema);

module.exports = Survey;
