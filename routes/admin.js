require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI; // Use .env variable

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully!"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
