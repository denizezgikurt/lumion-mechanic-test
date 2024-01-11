import React, { useState } from 'react';

const CaptionGenerator = () => {
  const [captions, setCaptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateCaptions = async () => {
    setIsLoading(true);
    // This is where we'll call the API to generate captions
    // For now, we'll use some placeholder text
    const generatedCaptions = [
      "Innovation drives us forward.",
      "Crafting the future, one design at a time.",
      "Where creativity meets technology."
    ];
    setCaptions(generatedCaptions);
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={generateCaptions} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Captions'}
      </button>
      <div>
        {captions.map((caption, index) => (
          <div key={index}>{caption}</div>
        ))}
      </div>
    </div>
  );
};

export default CaptionGenerator;
