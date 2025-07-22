/**
 * Configuration file for Zoom AI Companion
 * 
 * To use the AI functionality:
 * 1. Get your OpenAI API key from https://platform.openai.com/api-keys
 * 2. Replace 'your-openai-api-key-here' with your actual API key
 * 3. Save this file
 * 4. Refresh the page
 */

// Replace this with your actual OpenAI API key
const OPENAI_API_KEY = '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';

// You can also customize the AI model and settings here
const AI_CONFIG = {
  model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
  max_tokens: 500,
  temperature: 0.7
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { OPENAI_API_KEY, AI_CONFIG };
} 