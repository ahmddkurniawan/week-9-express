const express = require("express")
const router = express.Router();
const {user, hiburan} = require("../models")
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10)

//user regist

router.post("/register", async(req, res, next) => {
    
    //terima input data
    const {email, username, password} = req.body;

    const hashPassword = bcrypt.hashSync(password, salt)
    
    const createduser = await user.create({
        email,
        username,
        password: hashPassword
    }, {returning: true})

    res.status(201).json(createduser)
})

//login user
router.post("/login", async(req, res, next) => {
    try {
        const {email, password} = req.body;

        //search user db
        const foundUser = await user.findOne({
            where: {
                email
            }
        })

        if(foundUser) {

            //check pass
            const comparePassword = bcrypt.compareSync(password, foundUser.password)

            if(comparePassword) {

            } else {
                throw {name: "invalid"}
            }

        } else {
            throw {name: "invalid"}
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router;