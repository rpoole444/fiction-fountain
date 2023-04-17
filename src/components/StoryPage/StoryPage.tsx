import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './StoryPage.css';

interface StoryPageProps {
  prompt: string;
  location: any;
}

const StoryPage: React.FC<StoryPageProps> = ({ location }) => {
  const [story, setStory] = useState('');
  const history = useHistory();

  useEffect(() => {
    console.log("HERE:", prompt)
    const generateStory = async () => {
      try {
        const response = await fetch('http://localhost:5001/generate-story', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: location.state?.prompt }),
        });

        const data = await response.json();

if (response.status !== 200) {
  console.error('Error generating story:', data);
  throw new Error(`Error generating story: ${data.error}`);
} else {
  setStory(data.story);
}

      } catch (error) {
        console.error('Error generating story:', error);
      }
    };

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
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default StoryPage;
