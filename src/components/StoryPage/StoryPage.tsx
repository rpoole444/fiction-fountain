import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./StoryPage.css";

interface StoryPageProps {
  prompt: string;
  location: any;
}

const StoryPage: React.FC<StoryPageProps> = ({ location }) => {
  const [story, setStory] = useState("");
  const [storyImage, setStoryImage] = useState("");
  const history = useHistory();

  useEffect(() => {
    console.log("HERE:", prompt);
    const generateStory = async () => {
      try {
        const response = await fetch(
          "https://fiction-fountain.herokuapp.com/generate-story",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: location.state?.prompt }),
          }
        );

        const data = await response.json();

        if (response.status !== 200) {
          // console.error("Error generating story:", data);
          throw new Error(`Error generating story: ${data.error}`);
        } else {
          setStory(data.story);
        }
      } catch (error) {
        console.error("Error generating story:", error);
      }
    };

    const generateStoryImage = async () => {
      try {
        const response = await fetch(
          "https://fiction-fountain.herokuapp.com/generate-image",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: location?.state?.prompt, n: 2 }),
          }
        );

        const data = await response.json();
        console.log("HEEEEEREEEE:", data);
        if (response.status !== 200) {
          throw new Error("Error generating image:", data);
        } else {
          setStoryImage(data.image);
        }
      } catch (error) {
        console.error("Error generating image:", error);
      }
    };

    if (location.state?.customImage) {
      generateStoryImage();
    }

    generateStory();
  }, [location]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="StoryPage">
      <h1>Your Generated Story</h1>
      {story ? (
        <div className="story">
          <p>{story}</p>
        </div>
      ) : (
        <p>One Moment, Bringing Your Story to Life...</p>
      )}
      {storyImage ? (
        <div className="image">
          <img src={storyImage} alt="prompted" />
        </div>
      ) : (
        <p>Enjoy Your Story!</p>
      )}
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default StoryPage;
