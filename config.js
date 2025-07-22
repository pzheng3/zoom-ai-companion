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