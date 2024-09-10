const User  = require('../controllers/user.controler');

const router = require('express').Router();

router.get('/getAllUser',User.GetAllUser)
router.post('/getUserData',User.GetUserData)
router.post('/getSearcheduser',User.GetSearchedUser)
router.post('/login',User.Login)
router.post('/register',User.Register)
router.post('/edit',User.Edit)
router.patch('/update/:id', User.Update);
router.delete('/delete/:id', User.Delete);
router.post('/forgotPassword',User.forgotPassword)
router.post('/resetPassword',User.resetPassword)

module.exports = router;