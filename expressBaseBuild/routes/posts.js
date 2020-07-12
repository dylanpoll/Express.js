const express = require('express');  // retrieves the package
const router = express.Router();
//imports
const Post = require('../models/post');  //the "model" for our "Post" object
//routes
//-------JSON BODY ROUTING
//GETs all the collection data from the linked Database
router.get('/', async (req, res) => {       // the '/posts' bit adds to the "route" for the server so this would be on http://localhost:5000/posts/ 
    try {                                   // because this is posts and this "middleware" or rest subprocess is marked with "/"
        const posts = await Post.find();    //this calls the model post(it is a schema) there are additional sub methods of find
        res.json(posts);                    //res is short for response, this is responding to the client that sent the request with the data we pulled in the form of a JSON object
    } catch (err) {
        res.json({ message: err });
        console.log({ message: err });
    }
});
//mongoDB collection POST
router.post('/', async (req, res) => {
    console.log(req.body);                  //this logs the post being sent into the console, req.body = Required body, in this case it is a raw JSON body being sent as a byte stream.
    const post = new Post({
        title: req.body.title,              //JSON lets you do things like pull values from specific titled fields
        description: req.body.description   //so you can have a named field value passed between different languages
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) { res.json({ message: err }); }
});//end Body routing

//-----URL ENCODED
//pulls the URL path a user used to connect.
router.get('/:postId', async (req, res) => {//a GET request(retrieve information from the rest api), this one pulls data that will be fixed to the local variable postId in the url the user is connecting from
    try {                                                   //if this was 5000/posts/ThisIsATest the value of postId would be "ThisIsATest".
        const post = await Post.findById(req.params.postId);//this searches your collection using the value given to us from postId
        res.json(post);                                     //responds with the database object
        console.log(req.params.postId);                     //logs the value of postId to console to verify/debug
    } catch (err) {
        res.json({ message: err });
        console.log({ message: err });                      
    }
});
//Deletes a field from the collection
router.delete('/:postId', async (req, res) => {         //same as before, but the access method here is delete, it will delete data in our system.
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });  //removes the entree with a _id in our database that matches postId's value
        res.json(removedPost);      //echoes the removed post into console.
    } catch (err) {
        res.json({ message: err });
        console.log({ message: err });
    }
});
//update a field in a collection
router.patch('/:postId', async (req, res) => {  //PATCH is used to CHANGE the value of a matching item in our database
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });   //update one goes (searched for item) (field you want to change with the value to replace it with)
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
        console.log({ message: err });
    }
});//end URL encoding routes
//routesEND-------------
module.exports = router;