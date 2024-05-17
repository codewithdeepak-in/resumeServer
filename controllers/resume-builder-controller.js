const generateUniqueId = require('../utils/generateUniqueId');
const Resume = require('../model/index');
const resumeBuilderController = {
    async resume(req, res, next) {
        try{
            const {fname, lname, summary, skills, email} = req.body;
            // First the email is registered or not. 
            const isTaken = await Resume.isEmailTaken(email);
            if(isTaken){
                return res.json({
                    username: isTaken.fname + ' ' + isTaken.lname,
                    uniqueId: isTaken.uniqueId,
                    isExits: true
                })
            }
            const uniqueId = await generateUniqueId();
            // If email is not taken then create a new resume.
            const resumeData = {
                uniqueId: uniqueId,
                fname: fname,
                lname: lname,
                summary: summary,
                skills: skills,
                email: email
            }
            // Assuming Resume is your Mongoose model
            const resume = await Resume.create(resumeData); 
            resume.save();
            res.json({...resume._doc, isExits: false}); 
        }catch(e){
            res.json({
                message: e.message  
            })
        }
    }
}



module.exports = {
    resumeBuilderController: resumeBuilderController,
}