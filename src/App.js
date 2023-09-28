// App.js (Main component with routing)
import React,{useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/Home";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./App.css";

function App() {
  const [topStories, setTopStories] = useState([]);
 
  useEffect(() => {
    // Replace "your_api_endpoint_here" with the actual API endpoint
    const apiEndpoint = "https://api.openai.com/v1/completions";

    const fetchTopStories = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTopStories(data); // Update the topStories state with fetched data
      } catch (error) {
        console.error("Error fetching top stories:", error);
      }
    };

    fetchTopStories(); // Call the function to fetch top stories when the component mounts
  }, []);

  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/leaderboard" element={<Leaderboard stories={topStories} />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
