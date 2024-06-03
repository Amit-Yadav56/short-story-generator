const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const story = require("../models/story")

// Route for generating a short story
router.post('/generate-story', async (req, res) => {
  const { prompt, wordCount } = req.body;

  const apiKey = 'your-api-key-here';
  const apiUrl = 'https://api.openai.com/v1/completions';
  const requestData = {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: wordCount
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(requestData)
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch story');
    }
    const data = await response.json();
    const story = data.choices[0].text.trim();
    res.json({ story });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/new', async (req, res) => {
  const newStory = story(
    {
      prompt: req.body.prompt,
      story: req.body.story,
      category: req.body.category,
      likes: req.body.likes
    }
  );

  try {
    //save is a method comming from mongoose provided by specific model i.e(album)
    const saveAlbum = await newStory.save();
    return res.status(200).send({ sucess: true, album: saveAlbum })
  }
  catch (error) {
    return res.status(400).send({ sucess: false, msg: error })
  }
})

module.exports = router;
