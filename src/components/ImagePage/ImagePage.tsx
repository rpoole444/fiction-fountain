import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ImagePage.css";

interface ImagePageProps {
  prompt: string;
  location: any;
}

const ImagePage: React.FC<ImagePageProps> = ({ location }) => {
  const [image, setImage] = useState("");
  const history = useHistory();

  useEffect(() => {
    const generateImage = async () => {
      try {
        const response = await fetch("http://localhost:5001/generate-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: location.state?.prompt }),
        });

        const data = await response.json();

        if (response.status !== 200) {
          throw new Error("Error generating story:", data);
        } else {
          setImage(data.image);
        }
      } catch (error) {
        console.error("Error generating story:", error);
      }
    };

    generateImage();
  }, [location]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="ImagePage">
      <h1>Your Generated Image</h1>
      {image ? (
        <div className="image">
          <img src={image} alt="prompted" />
        </div>
      ) : (
        <p>One Moment, Bringing Your Image to Life...</p>
      )}
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};
export default ImagePage;
