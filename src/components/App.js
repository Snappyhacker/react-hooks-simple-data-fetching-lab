// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State to hold the dog image URL
  const [loading, setLoading] = useState(true); // State to handle loading status

  useEffect(() => {
    // Fetch the random dog image when the component mounts
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL to state
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false); // Even on error, stop showing the loading message
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" /> {/* Show the dog image */}
    </div>
  );
}

export default App;
