const express = require("express")
const Ref = require("../models/ref")
const Post = require("../models/Post")

const router = express.Router()

router.post("/ref", async(req,res) => {
    const users = new Ref({
        name: req.body.name
    })

    const ress = await users.save()
    res.send(ress)
})

router.post("/posts", async(req, res, next) => {
   const posts = new Post({
    title: req.body.title,
    postedBy: req.body.postedBy,
    comments: {
        text: req.body.text,
        postedBy: req.body.postedBy
    }

   
   })
  const ress = posts.save()
   res.send(ress)

//   const rs = Post.find({}).populate('postedBy').
//   exec().then((posts => {
//     console.log(posts)
//   }))
//   return res.json(posts)
  
//   res.send(rs)
//   next()

    // if (!error) {
    //     Post.find({})
    //         .populate('postedBy')
    //         .populate('comments.postedBy')
    //         .exec(function(error, posts) {
    //             console.log(JSON.stringify(posts, null, "\t"))
    //         })
    // }
})

   

module.exports = router