const express = require("express")
const router = express.Router()
const {getPosts, postPost} = require("../controller/postController.js")



router.route("/").get(getPosts)

router.route("/").post(postPost)

module.exports = router