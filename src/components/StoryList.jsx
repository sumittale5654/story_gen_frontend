// components/StoryList.js
import React from 'react';
import "../components/StoryList.css";

function StoryList({ stories, upvoteStory, saveStory, shareStory }) {
  return (
    <div className="story-list-container">
      <h2 className="story-list-title">Story List</h2>
      <ul>
        {stories.map((story, index) => (
          <li key={index} className="story-item">
            <p className={`story-text ${story.saved ? 'saved' : ''}`}>{story.text}</p>
            <button className="story-button" onClick={() => upvoteStory(index)}>Upvote</button>
            
            <button className="story-button" onClick={() => saveStory(index)}>Save</button>

            <button className="story-button" onClick={() => shareStory(index)}>Share</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryList;