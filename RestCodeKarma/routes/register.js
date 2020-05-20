const express = require('express');  // retrieves the package
const router = express.Router();
//imports
    const User = require('../models/user');  //the "model" for our "Post" object
//routes-------------
    router.post('/',async (req,res) => {
            console.log(req.body);
                const user = new User({
                    name : req.body.name ,
                    email : req.body.email,
                    karma : req.body.karma,
                    idtoken : req.body.idtoken,
                    roles : req.body.roles,
                    questHistory : req.body.questHistory,
                    projectHistory :  req.body.projectHistory,
                    skills : req.body.skills,
                    discordID : req.body.discordID,
                    level : req.body.level,
                    streak : req.body.streak,
                    password :  req.body.password,
                });
            try {   const savedUser = await user.save()
                    res.json(savedUser);
            }catch (err){res.json({ message : err });}
        });
                router.post('/new',async (req,res) => {
                    console.log(req.body);
                        const user = new User({
                            name : req.body.name ,
                            email : req.body.email,
                            karma : 5,
                            idtoken : 0,
                            roles : "new",
                            questHistory : "none",
                            projectHistory :  "none",
                            skills : "none",
                            discordID : 000,
                            level : "F",
                            streak : 0,
                            password :  req.body.password,
                        });
                        console.log(user);
                    try {   const savedUser = await user.save()
                            res.json(savedUser);
                    }catch (err){res.json({ message : err });}
                });
//routesEND-------------
module.exports = router;