import React from "react";
import { useHistory } from "react-router-dom";
import CanvasImage from "../assets/CanvasImage.png";
import CoolBook from "../assets/CoolBook.png";
import "./HomePage.css";
import Header from "../Header/Header";

const HomePage: React.FC = () => {
  const history = useHistory();

  const navigateToCustomPrompts = () => {
    history.push("/custom-prompt");
  };

  const navigateToCustomImagePrompts = () => {
    history.push("/image-prompt");
  };

  return (
    <div className="full-homepage">
      <Header />
      <div className="HomePage">
        <section className="story-generator-container">
          <section>
            <h2> Story Generator</h2>
            <p>
              Make a story for any occasion, but perfect for bedtime and
              storytime!
            </p>
            <button onClick={navigateToCustomPrompts}>
              Create your custom prompt
            </button>
          </section>
          <img src={CoolBook} alt="book" />
        </section>
        <section className="image-generator-container">
          <img src={CanvasImage} alt="canvas" />
          <section>
            <h2>Image Generator</h2>
            <p>In addition to our Story Generator, Try our image generator!</p>
            <p>
              Give Our ai a prompt and see what fictional image is created for
              your enjoyment!
            </p>
            <button onClick={navigateToCustomImagePrompts}>
              Create your custom prompt
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
