const express = require('express');  // retrieves the package
const router = express.Router();
//imports
    const Post = require('../models/post');  //the "model" for our "Post" object
//routes-------------
    //mongoDB collection pull
        //pulls all fields in collection post
            router.get('/', async (req,res) =>{  // the '/posts' bit adds to the "route" for the server so this would be on http://localhost:5000/posts
                try{
                    const posts = await Post.find(); //this calls the model post(it is a schema) there are additional sub methods of find
                    res.json(posts);
                }catch (err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
            });
    //mongoDB collection push
    router.post('/',async (req,res) => {
            console.log(req.body);//this logs on console when someone visits http://localhost:5000/posts

            const post = new Post({
                info: req.body.info,
            });
            try {   const savedPost = await post.save()
                    res.json(savedPost);
            }catch (err){res.json({ message : err });}
        });

            //pulls the URL path a user used to connect.
                router.get('/:postId', async (req,res) =>{//this pulls the url the user is connecting from
                        try{
                            const post = await Post.findById(req.params.postId);//this searches your collection using the attempted URL entree as a search key
                            res.json(post);//responds with the database object
                            console.log(req.params.postId);
                        }catch(err){
                            res.json({message: err});
                            console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                        }
                });
    //Deletes a field from the collection
        router.delete('/:postId',async (req,res) =>{
            try {
                const removedPost = await Post.remove({_id: req.params.postId});
                res.json(removedPost);
            }catch(err){
                    res.json({message: err});
                    console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
            }
        });
            //update a field in a collection
                router.patch('/:postId',async (req,res) =>{
                    try {
                        const updatePost = await Post.updateOne({_id: req.params.postId},{$set:{ title: req.body.title}} );
                        res.json(updatePost);
                    }catch(err){
                            res.json({message: err});
                            console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                    }
                });

//routesEND-------------
module.exports = router;

 /* used to initialise a collection
   router.post('/',async (req,res) => {
        console.log(req.body);//this logs on console when someone visits http://localhost:5000/posts
        const post = new Post({
            info: req.body.info,
        });
        post.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log('error writing to DB.')
            })
    });
 */

        /*
        //update a field in a collection
        //this is an improv idea by me
            router.patch('/:postId'+'/:newData',async (req,res) =>{
                try {
                    String text = req.params.newData;
                    const updatePost = await Post.updateOne({_id: req.params.postId},{$set:{ title: text}} );
                    res.json(updatePost);
                }catch(err){
                        res.json({message: err});
                        console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                }
         */