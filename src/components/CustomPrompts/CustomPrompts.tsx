import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CustomPrompts.css';

const CustomPrompts: React.FC = () => {
  const [customPrompt, setCustomPrompt] = useState('');
  const history = useHistory();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomPrompt(event.target.value);
  };

  const handleSubmit = () => {
    if (customPrompt.trim()) {
      // You can either save the custom prompt in a state management system or pass it directly to the StoryPage component
      console.log("Custom prompt:", customPrompt);
      history.push({
        pathname: '/story',
        state: { prompt: customPrompt }
      }); // Change the path if you need to pass the custom prompt directly to the StoryPage component
    }
  };

  return (
    <div className="CustomPrompts">
      <h1>Create Your Custom Prompt</h1>
      <input
        type="text"
        value={customPrompt}
        onChange={(e) => {
          handleInputChange(e)
        }}
        placeholder="Enter your custom prompt here"
      />
      <button onClick={handleSubmit}>
        Generate Story
      </button>
    </div>
  );
};

export default CustomPrompts;
