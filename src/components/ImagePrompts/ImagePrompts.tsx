import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ImagePrompts.css";

const ImagePrompts: React.FC = () => {
  const [imagePrompt, setImagePrompt] = useState<string>("");
  const history = useHistory();

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImagePrompt(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Image prompt:", imagePrompt);

    if (imagePrompt.trim()) {
      history.push({
        pathname: "/image",
        state: { prompt: imagePrompt },
      });
    }
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="CustomImagePrompts">
      <h1>Create Your Custom Image Prompt</h1>
      <input
        type="text"
        value={imagePrompt}
        onChange={(e) => {
          handleImageInput(e);
        }}
        placeholder="Enter your custom image prompt here"
      />
      <button onClick={handleSubmit}>Generate Image</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default ImagePrompts;
