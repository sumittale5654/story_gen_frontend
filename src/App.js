// App.js (Main component with routing)
import React,{useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/Home";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar"; 
import "./App.css";

function App() {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {

    const apiEndpoint = "http://localhost:5000/generate-story";

    const fetchTopStories = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTopStories(data); 
        }catch (error) {
        console.error("Error fetching top stories:", error);
      }
    };

    fetchTopStories(); 
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
