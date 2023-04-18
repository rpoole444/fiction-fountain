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
    <>
      <section className="intro-container">
        <h1>Welcome to Fiction Fountain</h1>
        <p>
          Welcome to Fiction Fountain where with a simple prompt you are able to
          create a custimized story!
        </p>
      </section>
      <div className="HomePage">
        <section className="story-generator-container">
          <section>
            <h2> Story Generator</h2>
            <p>
              Make a story for any occasion, but perfect for bedtime and
              storytime!
            </p>
          </section>
          <button onClick={navigateToCustomPrompts}>
            Create your custom prompt
          </button>
        </section>
        <section className="image-generator-container">
          <section>
            <h2>Image Generator</h2>
            <p>
              In addition to our Story Generator, Try our image generator! Give
              our ai a prompt and see what fictional image is created for your
              enjoyment
            </p>
          </section>
          <button onClick={navigateToCustomPrompts}>
            Create your custom prompt
          </button>
        </section>
      </div>
    </>
  );
};

export default HomePage;
