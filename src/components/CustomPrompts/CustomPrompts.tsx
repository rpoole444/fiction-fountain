import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CustomPrompts.css";

const CustomPrompts: React.FC = () => {
  const [customPrompt, setCustomPrompt] = useState("");
  const [customImage, setCustomImage] = useState(false);
  const history = useHistory();

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomImage(event.target.checked);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomPrompt(event.target.value);
  };

  const handleSubmit = () => {
    if (customPrompt.trim()) {
      // You can either save the custom prompt in a state management system or pass it directly to the StoryPage component
      console.log("Custom prompt:", customPrompt);
      history.push({
        pathname: "/story",
        state: { prompt: customPrompt, customImage },
      }); // Change the path if you need to pass the custom prompt directly to the StoryPage component
    }
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="CustomPrompts">
      <h1>Create Your Custom Story Prompt</h1>
      <h2>Welcome to the Story Generator!</h2>
      <section className="story-prompt-deets-container">
        <p>
          Here is a guide and suggestions in creating great prompts for the best
          story results.
        </p>
        <section className="list">
          <h2>Create Descriptive Prompts</h2>
          <hr className="line" />
          <h3>Consider Adding The Following Details</h3>
          <ul style={{ listStyle: "disc inside" }}>
            <li>Story Characters</li>
            <li>Story Location</li>
            <li>Story Plot</li>
            <li>Story Mood</li>
          </ul>
          <p>
            If you want a corresponding image to go with your prompt, just make
            sure the button is checked!
          </p>
        </section>
      </section>
      <section className="input-toggle">
        <input
          type="text"
          value={customPrompt}
          onChange={(e) => {
            handleInputChange(e);
          }}
          placeholder="Enter your custom prompt here"
        />
        <label className="switch">
          StoryImage
          <input type="checkbox" onChange={handleToggleChange} />
          <span className="slider round"></span>
        </label>
      </section>
      <button onClick={handleSubmit}>Generate Story</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default CustomPrompts;
