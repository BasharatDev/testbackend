const mongoose = require('mongoose');

// MongoDB database URL
const mongoURI = 'mongodb://Basharat15:test123456@ac-dqkdhxy-shard-00-00.f5iyvfs.mongodb.net:27017,ac-dqkdhxy-shard-00-01.f5iyvfs.mongodb.net:27017,ac-dqkdhxy-shard-00-02.f5iyvfs.mongodb.net:27017/?ssl=true&replicaSet=atlas-4178it-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });

const LogInSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", LogInSchema);

module.exports = User;