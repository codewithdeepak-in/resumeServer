const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        required: true,
        unique: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: String,
    education: [{
        institution: String,
        degree: String,
        graduationYear: Number
    }],
    summary: {
        type: String,
        required: true
    },
    experience: [{
        company: String,
        position: String,
        startDate: Date,
        endDate: Date
    }],
    skills: [String],
    languages: [String]
}, {
    timestamps: true
});

resumeSchema.statics.exists = async function (uniqueId) {
    const count = await this.countDocuments({ uniqueId });
    return count > 0;
};

resumeSchema.statics.isEmailTaken = async function (email) {
    const isTaken = await this.findOne({ email });
    return isTaken;
};

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
