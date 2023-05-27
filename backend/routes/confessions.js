const router = require("express").Router();
let Confession = require("../models/confession.model");

router.route("/").post((req,res) => {
    const title = req.body.title;
    const confession = req.body.confession;
    const date = req.body.date;
    const anonymousPost = req.body.anonymousPost;
    const newConfession = new Confession ({title, confession, date, anonymousPost});

    newConfession.save()
        .then(() => res.json("Confession added"))
        .catch(err => res.status(500).json("error:" + err));
});

router.route("/getter").get((req, res)=> {
    Confession.find()
        .then (confessions => res.json(confessions))
        .catch(err => res.status(400).json("error:"+err))
});

module.exports = router;