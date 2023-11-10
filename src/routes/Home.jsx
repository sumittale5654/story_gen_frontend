// components/Home.js
import React, { useState } from 'react';
import StoryPromptForm from '../components/StoryPromptForm';
import GeneratedStory from '../components/GeneratedStory';
import StoryList from '../components/StoryList';
import "../routes/Home.css";
import axios from 'axios';

function Home() {
  const [stories, setStories] = useState([ ]);
  const [generatedStory, setGeneratedStory] = useState('');


  const generateStory = async (prompt) => {
    try {
      const response = await axios.post('http://localhost:5000/generate-story', { prompt });
      if (response.data.story) {
        setGeneratedStory(response.data.story);
        const newStory = { text: response.data.story, upvotes: 0 };
        setStories([...stories, newStory]);
      }
    } catch (error) {
      console.error('Error generating story:', error);
    }
  };

  const upvoteStory = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].upvotes++;
    setStories(updatedStories);
  };

  const saveStory = async (index) => {
    try{
      const storyToSave = stories[index];
      const response = await axios.post('/api/save-story', {story: storyToSave});
      console.log(response.data.message);

      //update the saved status of the story
      const updatedStories = [...stories];
      updatedStories[index].saved = true; //Assuming you a saved property
      setStories(updatedStories);
    }catch (error){
      console.error('Error saving story;',error);
    }
  };

  
  const shareStory = (index) => {
   const storyToShare = stories[index].text;

   if(navigator.share){
    navigator.share({
      title: "Share Story",
      text: storyToShare,
    })
    .then(() =>{
      console.log('Shared successfully');
    })
    .catch((error) =>{
      console.error('Error sharing story:', error);
    });
   }else{
   }
    alert(`Sharing story ${index}: ${stories[index].text}`);
  };


  return (
    <div>
      <h1>Story Generator</h1>
      <StoryPromptForm generateStory={generateStory} />
      <GeneratedStory story={generatedStory} />
      {/* <GeneratedStory story={stories.length > 0 ? stories[stories.length - 1].text : ''} /> */}
      <StoryList stories={stories} upvoteStory={upvoteStory} saveStory={saveStory} shareStory={shareStory} />
    </div>
  );
}

export default Home;
