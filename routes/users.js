const express = require("express");
const { v4: uuidv4 } = require('uuid');
uuidv4();
const router = express.Router();
module.exports = router ; 

// const users = [
//     {
//         firstName : "John",
//         lastName : "Doe",
//         age : 25
//     },
//     {
//         firstName : "Jane",
//         lastName : "Doe",
//         age : 24
//     },
// ]
let users = [];


// all routes in here start with / and not from 'users'
router.get("/",(req,res) => {
    console.log(users);
    res.send(users);
    res.send("Hello");
});

router.post("/",(req,res) =>{
    console.log("Post route reached")

    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id:userId }
    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the database`);
});

// /users/2  ==> req.params {id:2}
router.get("/:id",(req,res) =>{
    const {id} = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
    res.send("The GET Id routed ")
})

router.delete("/:id",(req,res) => {
    const { id } = req.params;

    // id to delete 123
    // john 123
    // jane 321

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database.`);
});

router.patch("/:id",(req,res) => {
    const { id } = req.params;

    user = users.find((user) => user.id == id);

    if(firstName)  user.firstName = firstName;
    if(lastName)  user.lastName = lastName; 
    if(age)  user.age = age;
    
    res.send(`user with id ${id} has been updated`);

 })