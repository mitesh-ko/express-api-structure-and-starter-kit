import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        profile: [
            {
                type: {
                    type: String,
                    required: false,
                    trim: true,
                },
                url: {
                    type: String,
                    required: false,
                    trim: true,
                },
            }
        ],
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active'
        }
    },
    {
        timestamps: true,
    });

export default mongoose.model('User', userSchema);