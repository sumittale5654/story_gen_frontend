// components/StoryPromptForm.js
import React, { useState } from 'react';
import "../components/StoryPromptForm.css";

function StoryPromptForm({ generateStory }) {
  const [prompt, setPrompt] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateStory(prompt);
    setPrompt(''); // Clear the input field
  };

  return (
    <div className="story-prompt-container">
      <form onSubmit={handleSubmit} className="story-prompt-form">
        <input
          type="text"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter your story prompt"
          className="story-prompt-input"
        />
        <button type="submit" className="story-prompt-button">Generate Story</button>
      </form>
    </div>
  );
}  

export default StoryPromptForm;

