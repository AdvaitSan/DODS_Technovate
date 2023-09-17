// GptChatbox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GptChatbox = ({ apiKey }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: inputText || 'Hello, GPT!',
          max_tokens: 50, // Adjust the response length as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      setOutputText(response.data.choices[0].text);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <div>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <p><strong>Chatbot Response:</strong></p>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default GptChatbox;
