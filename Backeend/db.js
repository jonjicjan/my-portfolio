const mongoose = require('mongoose');

const connectTOMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Contactme', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectTOMongo;
