const express = require('express');  // retrieves the package
const router = express.Router();
//imports
    const User = require('../models/user');  //the "model" for our "Post" object
//routes-------------
//pulls all fields in collection post
            router.get('/', async (req,res) =>{  // the '/posts' bit adds to the "route" for the server so this would be on http://localhost:5000/posts
                try{
                    const users = await User.find(); //this calls the model post(it is a schema) there are additional sub methods of find
                    res.json(users);
                }catch (err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
//mongoDB collection push
            router.post('/',async (req,res) => {
                        console.log(req.body);//this logs on console when someone visits http://localhost:5000/posts

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
            router.post('/newFromSite',async (req,res) => {
                    console.log(req.body);//this logs on console when someone visits http://localhost:5000/posts
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
//individual field grabbing.
            router.get('/findUserDataByDiscordID/:discId', async (req,res) =>{//this pulls the url the user is connecting from
                    try{
                        const fs = require('fs');
                        let discordUser = await User.findOne({'discordID':(req.params.discId)});
                        let profile = [discordUser.name,discordUser.karma,discordUser.roles,discordUser.questHistory,discordUser.projectHistory,discordUser.skills,discordUser.level,discordUser.streak];
                        console.log(profile);
                        res.json(profile);
                    }catch(err){
                        res.json({message: err});
                        console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                    }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/karma', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.karma;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/name', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.name;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/roles', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.roles;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/level', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.level;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/skills', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.skills;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/streak', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.streak;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/email', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.email;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/idtoken', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.idtoken;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/discordid', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser.discordID;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
            router.get('/findUserDataByDiscordID/:discId'+'/_id', async (req,res) =>{//this pulls the url the user is connecting from
                try{
                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                    let content = discordUser._id;
                    res.json(content);//responds with the database object
                    console.log(content);
                }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
                });
                //pulls the URL path a user used to connect.
            router.get('/user/:userId', async (req,res) =>{//this pulls the url the user is connecting from
                        try{
                            //const user = await User.findById(req.params.userId);//this searches your collection using the attempted URL entree as a search key
                            const user = await User.findById(req.params.userId);//this searches your collection using the attempted URL entree as a search key
                            res.json(user);//responds with the database object
                            console.log(req.params.userId);
                        }catch(err){
                            res.json({message: err});
                            console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                        }
                });
                //Deletes a field from the collection
            router.delete('/:userId',async (req,res) =>{
                    try {
                        const removedUser = await User.remove({_id: req.params.userId});
                        res.json(removedUser);
                    }catch(err){
                            res.json({message: err});
                            console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                    }
                });
                //update a field in a collection
            router.patch('/changekarma/:userId'+'/:numberValue',async (req,res) =>{
                    try {const updateUser = await User.updateOne({_id: req.params.userId},{$set:{ karma : req.params.numberValue}} );//updates karma
                        res.json(updateUser);
                    }catch(err){
                            res.json({message: err});
                            console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                    }
                });
//routesEND-------------
module.exports = router;