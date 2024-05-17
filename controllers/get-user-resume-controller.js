const Resume = require('../model/index');

const getResumeController = {
    async getResume(req, res, next) {
        try {
            const email = req.query.email;
            if (!email) {
                throw new Error("Email parameter is missing");
            }
            const isDataExists = await Resume.findOne({ email });

            if (!isDataExists) {
                throw new Error("No data found");
            }

            res.json({
                success: true,
                data: isDataExists,
                status: 200
            });

        } catch (error) {
            console.error(error.message);
            res.status(error.status || 500).json({
                success: false,
                error: error.message || "Internal server error"
            });
        }
    },

    async userResume(req, res, next){
        try{
            const uniqueId = req.query.uniqueId;
            const isDataExists = await Resume.findOne({ uniqueId });
            if(!isDataExists){
                throw new Error("No data found");
            }
            res.json({
                success: true,
                data: isDataExists,
                status: 200
            });
        }catch(error){
            res.json({
                success: false,
                error: error.message || "Internal server error"
            })
        }
    }

}

module.exports = {
    getResumeController: getResumeController
}
