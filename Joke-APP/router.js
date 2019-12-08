const { Router } = require("express");
const Joke = require("./model");
const db = require('../db');
const router = new Router();

router.get("/jokes", async (req, res, next) => {
try {

let rowsCount = await db.query(
    'select count(*) from "Jokes"'
)
console.log("rows count : ", rowsCount[0][0].count)

let randomNum = Math.floor((Math.random() * rowsCount[0][0].count) + 1);
console.log("randomNum : ", randomNum)

const joke = await Joke.findOne({
    where: {
        id : randomNum
    }
})
res
.status(200)
.send(joke)
}
catch (error) {
next(error)
}
})

//post jokes

router.post("/jokes", async (req, res, next) => {
    console.log('you are inside the post request in joke table route')
    console.log("req-body:", req.body)
    try {
        const joke = await Joke.create({
            type: req.body.type,  
            setup: req.body.setup, //joke
            punchline: req.body.punchline
        })
        res
            .status(201)
            .send(joke)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router;
