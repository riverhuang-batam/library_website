const express = require('express');
const router = express.Router();
const Post = require('../models/library')
router.get('/', (req, res) => {
    Post.find()
    .then(data => res.json(data))
});
router.get('/:id', (req,res) =>{
    Post.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json({message: err}))
})
router.put('/:id', (req,res) => {
  Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description
  })
  .then(data => res.json(data))
  .catch(err => res.json({message: err}))
})
router.delete('/:id', (req,res) => {
  Post.findByIdAndRemove(req.params.id)
  .then(data => res.json(data))
  .catch(err => res.json({message: err}))
})
router.post('/', (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post
    .save()
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json({message:err}))
})


module.exports = router;
