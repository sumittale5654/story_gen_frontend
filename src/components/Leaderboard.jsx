// components/Leaderboard.js
import React from 'react';
import "../components/Leaderboard.css";

function Leaderboard({ stories }) {
  if (!Array.isArray(stories)) {
    return null; // or some other fallback UI
  }
  // Sort stories by upvotes in descending order
  const sortedStories = [...stories].sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <ul className="leaderboard-list">
        {sortedStories.map((story, index) => (
          <li className="leaderboard-item" key={index}>
            <p className="story-text">{story.text}</p>
            <p className="story-upvotes">Upvotes: {story.upvotes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

