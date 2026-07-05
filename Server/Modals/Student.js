const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Student name is required'],
			trim: true,
		},

		class: {
			type: String,
			required: [true, 'Class is required'],
			enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		},
	},
	{
		timestamps: true,
	},
)

module.exports = mongoose.model('Student', studentSchema)
