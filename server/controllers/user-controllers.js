const userService = require('../service/user-service')
class UserControllers {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }
            const tokensAndUser = await userService.registration(email, password);
            res.cookie('refreshToken', tokensAndUser.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(tokensAndUser);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

async login(req, res, next) {
    try {
        
    } catch (e) {
        
    }
}

async logout(req, res, next) {
    try {
        
    } catch (e) {
        
    }
}

async refresh(req, res, next) {
    try {
        
    } catch (e) {
        
    }
}

async getUsers(req, res, next) {
    try {    
        res.json([1,2,3,4,5,6,7,8,9,10])    
    } catch (e) {
        
    }
}



}
module.exports = new UserControllers()