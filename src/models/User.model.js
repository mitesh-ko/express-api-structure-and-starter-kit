import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
})

export default mongoose.model('User', userSchema);