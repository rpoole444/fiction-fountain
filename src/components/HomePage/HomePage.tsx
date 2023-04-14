import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const history = useHistory();
  const predefinedPrompts = [
    "A day in the life of a time traveler",
    "The secret garden in the city",
    "An unexpected encounter with a mythical creature",
    // Add more prompts here
  ];

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
      <h2>Select a pre-defined prompt</h2>
      <ul>
        {predefinedPrompts.map((prompt, index) => (
          <li key={index} onClick={() => handlePromptClick(prompt)}>
            {prompt}
          </li>
        ))}
      </ul>
      <button onClick={navigateToCustomPrompts}>
        Create your custom prompt
      </button>
    </div>
  );
};

export default HomePage;
