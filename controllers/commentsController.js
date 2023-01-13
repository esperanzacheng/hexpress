const crypto = require('crypto')
const Comment = require('../models/commentsModel')
const s3 = require('../s3')

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

exports.getAllComment = async (req, res, next) => {
    try {
      const [allComment] = await Comment.fetchAll();
      for (let comment of allComment) {
        if (comment['img_url'] != '') {
          comment['img_url'] = await s3.getObjectSignedUrl(comment['img_url'])
        }
      }
      res.status(200).json(allComment);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

exports.postComment = async (req, res, next) => {
    try {
      const file = req.file;
      const imageName = generateFileName();

      // const fileBuffer = await sharp(file.buffer)
      //   .resize({ height: 1920, width: 1080, fit: "contain" })
      //   .toBuffer()
      await s3.uploadFile(file.buffer, imageName, file.mimetype)

      const postResponse = await Comment.post(req.body.text, imageName);
      const postedComment = await s3.getObjectSignedUrl(imageName);
      let response;
      if (postResponse[0]['serverStatus'] == '2') {
        response = { ok: true, data: postedComment};
      } else {
        response = { error: true}
      }

      res.status(201).json(response);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };