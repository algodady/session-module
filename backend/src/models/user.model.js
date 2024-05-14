import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        profile: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', UserSchema);
