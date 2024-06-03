const mongoose = require('mongoose')

const storyGeneratedSchema = mongoose.Schema({
  prompt: String,
  story: String,
  category: String,
  likes: Number
})

module.exports = mongoose.model('story', storyGeneratedSchema); 