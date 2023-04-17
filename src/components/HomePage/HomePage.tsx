import React from "react";
import { useHistory } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const history = useHistory();

  const handlePromptClick = (prompt: string) => {
    // You can either save the selected prompt in a state management system or pass it directly to the StoryPage component
    console.log("Selected prompt:", prompt);
  };

  const navigateToCustomPrompts = () => {
    history.push("/custom-prompt");
  };

  return (
    <div className="HomePage">
      <h1>Welcome to FictionFountain</h1>
      <button onClick={navigateToCustomPrompts}>
        Create your custom prompt
      </button>
    </div>
  );
};

export default HomePage;
