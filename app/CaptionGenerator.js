import React, { useState } from 'react';

const CaptionGenerator = () => {
  const [captions, setCaptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateCaptions = async () => {
    setIsLoading(true);
    try {
      const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Write a creative social media caption about Lumion 3d render software."}
        ]
      };

      const API_KEY = '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'; 

      // console.log(process.env.REACT_APP_OPENAI_API_KEY);

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`);
      }

      const data = await response.json();
      setCaptions([data.choices[0].message.content]);
    } catch (error) {
      console.error("Failed to generate captions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={generateCaptions} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Captions'}
      </button>
      {captions.length > 0 && (
        <div>
          {captions.map((caption, index) => (
            <div key={index}>{caption}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaptionGenerator;
