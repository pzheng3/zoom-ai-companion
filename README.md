# Zoom AI Companion

A desktop Zoom client prototype with integrated AI Companion powered by OpenAI.

## Features

- **Real AI Integration**: Powered by OpenAI GPT-3.5-turbo or GPT-4
- **Conversation Memory**: AI remembers the context of your conversation
- **Interactive UI**: Thumbs up/down, copy, and more actions for AI responses
- **Loading States**: Smooth loading animations while AI generates responses
- **Error Handling**: User-friendly error messages for API issues
- **Responsive Design**: Modern UI that matches Zoom's design language

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy your API key (keep it secure!)

### 2. Configure the Application

#### For Local Development:
1. Copy `config.example.js` to `config.js`
2. Open `config.js` in your code editor
3. Replace `'your-openai-api-key-here'` with your actual API key:

```javascript
const OPENAI_API_KEY = 'sk-your-actual-api-key-here';
```

4. Save the file

#### For GitHub Pages Deployment:
Since GitHub Pages doesn't support server-side environment variables, you'll need to:
1. Copy `config.example.js` to `config.js`
2. Add your API key to `config.js`
3. **Note**: This will expose your API key publicly. Consider using a separate API key for demo purposes.

### 3. Run the Application

#### Local Development:
1. Open `index.html` in your web browser
2. Click on the AI Companion icon in the top bar
3. Start chatting with the AI!

#### GitHub Pages:
1. Follow the deployment instructions below
2. Visit your GitHub Pages URL
3. Configure the API key as described above

## Usage

### Basic Chat
- Type your message in the input field at the bottom
- Press Enter or click the send button
- The AI will respond with helpful information

### Quick Prompts
- Use the preset buttons for common tasks:
  - "What meetings do I have today?"
  - "Brainstorm ideas for a team bonding activity"
  - "Set my meeting scheduling preferences"
  - "Tell me what I can do with AI Companion"

### AI Response Actions
Each AI response has 4 action buttons:
- **👍 Thumbs Up**: Rate the response as helpful
- **👎 Thumbs Down**: Rate the response as unhelpful
- **📋 Copy**: Copy the AI response to clipboard
- **⋯ More**: Additional options (future feature)

## Configuration Options

You can customize the AI behavior in `config.js`:

```javascript
const AI_CONFIG = {
  model: 'gpt-3.5-turbo', // or 'gpt-4'
  max_tokens: 500,        // Maximum response length
  temperature: 0.7        // Creativity level (0.0-1.0)
};
```

## Troubleshooting

### "Please configure your OpenAI API key"
- Make sure you've added your API key to `config.js`
- Check that the key is correct and active

### "API quota exceeded"
- Check your OpenAI account usage
- You may need to add billing information

### "Rate limit exceeded"
- Wait a moment and try again
- OpenAI has rate limits on API calls

### Network Errors
- Check your internet connection
- Make sure you can access `api.openai.com`

## Security Notes

- **Never commit your API key to version control**
- The API key is stored locally in `config.js`
- Consider using environment variables for production use

## Cost Information

- OpenAI charges per API call based on usage
- GPT-3.5-turbo is more cost-effective than GPT-4
- Monitor your usage at [OpenAI Usage](https://platform.openai.com/usage)

## Development

This is a prototype demonstrating AI integration in a Zoom-like interface. The AI Companion is designed to help with:

- Meeting management and scheduling
- Team collaboration and communication
- Calendar optimization and time management
- Task prioritization and productivity
- File organization and sharing
- General workplace assistance

## Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it `zoom-ai-companion` (or any name you prefer)
   - Make it public (required for free GitHub Pages)

2. **Upload your files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Zoom AI Companion prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zoom-ai-companion.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Click "Save"

4. **Configure API Key**
   - Copy `config.example.js` to `config.js`
   - Add your OpenAI API key to `config.js`
   - Commit and push the changes

5. **Access your site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/zoom-ai-companion`

### Alternative Deployment Options

- **Netlify**: Drag and drop your project folder to [Netlify](https://netlify.com)
- **Vercel**: Connect your GitHub repository to [Vercel](https://vercel.com)
- **Firebase Hosting**: Use Firebase CLI to deploy to Firebase Hosting

## Security Notes

- **Never commit your API key to version control**
- The API key is stored locally in `config.js`
- Consider using environment variables for production use
- For demo purposes, consider using a separate API key with usage limits

## License

This project is for educational and demonstration purposes. 