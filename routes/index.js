const express = require('express');
const router = new express.Router();
const multer = require('multer')
const commentController = require('../controllers/commentsController')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.get("/api/comments", commentController.getAllComment);
router.post("/api/comments", upload.single('img'), commentController.postComment);

module.exports = router;