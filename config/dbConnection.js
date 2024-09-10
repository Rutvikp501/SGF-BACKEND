const mongoose = require("mongoose");
//const MONGO_URI='mongodb://127.0.0.1:27017/DatabaseFood';
const connectDB = async() => {
	try
	{
		mongoose.set('strictQuery', false);
		const db = process.env.MONGO_URI;
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;