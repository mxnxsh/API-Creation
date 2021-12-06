import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`MongoDB is connected Successfully`);
}).catch((error) => {
    console.log(error.message);
});