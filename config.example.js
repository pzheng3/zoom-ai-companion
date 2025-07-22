/**
 * Example configuration file for Zoom AI Companion
 * 
 * To use the AI functionality:
 * 1. Copy this file to config.js
 * 2. Get your OpenAI API key from https://platform.openai.com/api-keys
 * 3. Replace 'your-openai-api-key-here' with your actual API key
 * 4. Save the file
 * 5. Refresh the page
 */

// Debug: Check if this file is loading
console.log('config.js is loading...');

// Replace this with your actual OpenAI API key
const OPENAI_API_KEY = 'your-openai-api-key-here';

// You can also customize the AI model and settings here
const AI_CONFIG = {
  model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
  max_tokens: 500,
  temperature: 0.7
};

// Debug: Log the configuration
console.log('Config loaded:', { OPENAI_API_KEY, AI_CONFIG });

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { OPENAI_API_KEY, AI_CONFIG };
} 