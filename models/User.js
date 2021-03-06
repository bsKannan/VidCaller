const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	imageUrl: {
		type: String,
		required: true,
		default: "images/default.png",
	},
	resetToken: String,
	resetTokenExpiration: Date,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
