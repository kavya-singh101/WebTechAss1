const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const collection = require("./mongodb");
const { sign } = require("crypto");

const templatePath = path.join(__dirname, '../')
const publicPath = path.join(__dirname, '../')

app.use(express.json());
app.set("view engine", "ejs")
app.set("views", templatePath)
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    // n="Login";
    res.status(201).render("index", {
        signin: "Login"
        
    })
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", async (req, res) => {

    const data = new collection({
        name: req.body.name,
        password: req.body.password
    })
    await collection.insertMany([data])
    res.status(201).render("index", {
        signin: req.body.name
        
    })

    // const data = {
    //     name: req.body.name,
    //     password: req.body.password
    // }
    // // console.log(data);

    
    // try {
    //     const checking = await collection.findOne({ name: req.body.name })
    //     if (checking.name === req.body.name && checking.password === req.body.password) {
    //         res.send("user details already exists")
    //     }
    //     else {
    //         await collection.insertMany([data])
    //     }
    // }
    // catch(e) {
    //     console.log(e.message);
    // }
    
   

})
app.post("/login", async (req, res) => {
    try {
        const checking = await collection.findOne({ name: req.body.name })
        if (checking.password === req.body.password) {
            res.status(201).render("index", {
                signin: req.body.name
            })
        }
        else {
            res.send("Wrong Password")
        }

    }
    catch(e) {
        console.log(e.message)
    }



})

app.listen(3000, () => {
    console.log("port connected")
})