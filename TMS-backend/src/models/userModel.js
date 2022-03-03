const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://amal:nodejs625@cluster0.w8day.mongodb.net/trainerManagement?retryWrites=true&w=majority");
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isadmin: {
        type: Boolean,
        required: true,
    }
})

            UserSchema.pre('save', async function (next) {
            try {
    
            if (this.isNew) {
                const salt = await bcrypt.genSalt(10)
                const modifiedPassword = await bcrypt.hash(this.password, salt)
                this.password = modifiedPassword
            }
            next()
            } catch (error) {
            next(error)
            }
            })


            UserSchema.methods.matchPassword = async function (enteredpassword) {
            try {
            return await bcrypt.compare(enteredpassword, this.password)
            } catch (error) {
            throw error
            }
            }

            const User = mongoose.model('user', UserSchema)
            module.exports = User