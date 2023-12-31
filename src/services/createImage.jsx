import axios from 'axios';

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions'; // Adjust the endpoint based on the API you're using

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
};

const generateDALLEResponse = async (prompt) => {
  try {
    const response = await axios.post(apiUrl, {
      prompt,
      // other parameters specific to your use case
    }, { headers });
    console.log(response);

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error calling DALL·E API:', error);
    throw error;
  }
};

export default generateDALLEResponse;