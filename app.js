/**
 * 切换主视图内容和高亮导航项
 */
/**
 * Render the Home view content (always up-to-date)
 * @returns {string} HTML string for home-center-group
 */
function renderHomeContent() {
  return `
    <div class="home-center-group">
      <div class="home-time" id="home-time">12:00</div>
      <div class="home-date" id="home-date">Monday, January 1</div>
      <div class="home-btn-row">
        <div class="home-btn-col">
          <button class="home-square-btn" id="btn-new-meeting">
            <img src="assets/home-btn-meeting.svg" alt="New Meeting" />
          </button>
          <div class="home-btn-caption">New Meeting</div>
        </div>
        <div class="home-btn-col">
          <button class="home-square-btn" id="btn-join">
            <img src="assets/home-btn-plus.svg" alt="Join" />
          </button>
          <div class="home-btn-caption">Join</div>
        </div>
        <div class="home-btn-col">
          <button class="home-square-btn" id="btn-schedule">
            <img src="assets/home-btn-calendar.svg" alt="Schedule" />
          </button>
          <div class="home-btn-caption">Schedule</div>
        </div>
        <div class="home-btn-col">
          <button class="home-square-btn" id="btn-share-screen">
            <img src="assets/home-btn-share.svg" alt="Share Screen" />
          </button>
          <div class="home-btn-caption">Share Screen</div>
        </div>
      </div>
      <img class="home-calendar-img" src="assets/home-calendar.png" alt="Calendar" />
    </div>
  `;
}

/**
 * Render the Chat view content (Slack-style)
 * @returns {string} HTML string for chat view
 */
function renderChatView() {
  return `
    <div class="chat-layout">
      <aside class="chat-nav">
        <div class="chat-nav__header">
          <span class="chat-nav__title">Team Chat</span>
          <button class="chat-nav__new-btn" title="New Chat">+</button>
        </div>
        <div class="chat-nav__search">
          <input type="text" class="chat-nav__search-input" placeholder="Search (⌘F)" />
        </div>
        <div class="chat-nav__filters">
          <button class="chat-nav__filter chat-nav__filter--active">All</button>
          <button class="chat-nav__filter">Mentions</button>
          <button class="chat-nav__filter">DMs</button>
          <button class="chat-nav__filter">Channels</button>
        </div>
        <ul class="chat-nav__list">
          <li class="chat-nav__item chat-nav__item--active">
            <img class="chat-nav__avatar" src="assets/avatar.png" alt="Avatar" />
            <div class="chat-nav__item-content">
              <div class="chat-nav__item-title">Design HQ</div>
              <div class="chat-nav__item-last">Hana Song: TOO CUTE!!</div>
            </div>
            <span class="chat-nav__item-time">12:45 PM</span>
          </li>
          <li class="chat-nav__item">
            <img class="chat-nav__avatar" src="assets/avatar.png" alt="Avatar" />
            <div class="chat-nav__item-content">
              <div class="chat-nav__item-title">General</div>
              <div class="chat-nav__item-last">Hana Song: I sent the designs o...</div>
            </div>
            <span class="chat-nav__item-time">12:45 PM</span>
          </li>
          <li class="chat-nav__item">
            <img class="chat-nav__avatar" src="assets/avatar.png" alt="Avatar" />
            <div class="chat-nav__item-content">
              <div class="chat-nav__item-title">Marketing</div>
              <div class="chat-nav__item-last">Ellen Miles: It might be August...</div>
            </div>
            <span class="chat-nav__item-time">12:45 PM</span>
          </li>
        </ul>
      </aside>
      <section class="chat-thread">
        <header class="chat-thread__header">
          <div class="chat-thread__avatar"><img src="assets/avatar.png" alt="Avatar" /></div>
          <div class="chat-thread__info">
            <div class="chat-thread__title">Design HQ</div>
            <div class="chat-thread__desc">Planning and sharing projects status for the US based creative team, including folks from Product Design, Marketing and Branding. Let’s collaborate and have fun here!</div>
          </div>
        </header>
        <div class="chat-thread__messages">
          <div class="chat-message chat-message--other">
            <img class="chat-message__avatar" src="assets/avatar.png" alt="Avatar" />
            <div class="chat-message__bubble-group">
              <div class="chat-message__meta"><span class="chat-message__author">Nabil Rashad</span> <span class="chat-message__time">9:20 AM</span></div>
              <div class="chat-message__bubble">Lorem ipsum dolor sit amet consectetur. Lectus diam non enim sit iaculis id enim. Habitant est enim vestibulum feugiat quis accumsan commodo molestie pretium. Amet eget sollicitudin et fermentum duis leo sollicitudin. Cursus faucibus molestie amet massa consectetur interdum nulla magna.</div>
            </div>
          </div>
          <div class="chat-message chat-message--self">
            <img class="chat-message__avatar" src="assets/avatar.png" alt="Avatar" />
            <div class="chat-message__bubble-group">
              <div class="chat-message__meta"><span class="chat-message__author">You</span> <span class="chat-message__time">9:21 AM</span></div>
              <div class="chat-message__bubble">Lorem ipsum dolor sit amet consectetur.</div>
            </div>
          </div>
        </div>
        <footer class="chat-thread__compose">
          <textarea class="chat-compose__input" placeholder="Write a message or type ”/“  for more" rows="1"></textarea>
          <button class="chat-compose__send" title="Send">→</button>
        </footer>
      </section>
    </div>
  `;
}

// Navigation history for back button functionality
let navigationHistory = ['home'];
let currentViewIndex = 0;

// Patch sidebar click logic to use renderChatView for chat tab
const sidebarItems = document.querySelectorAll('.sidebar__item');
sidebarItems.forEach(item => {
  item.addEventListener('click', function() {
    const view = this.getAttribute('data-view');
    navigateToView(view);
  });
});

/**
 * Navigate to a specific view and update history
 */
function navigateToView(view) {
  // Update active sidebar item
  document.querySelectorAll('.sidebar__item').forEach(i => i.classList.remove('active'));
  document.querySelector(`[data-view="${view}"]`).classList.add('active');
  
  // Add to navigation history if it's a new view
  if (view !== navigationHistory[currentViewIndex]) {
    // Remove any views after current index (if we went back and then navigated forward)
    navigationHistory = navigationHistory.slice(0, currentViewIndex + 1);
    navigationHistory.push(view);
    currentViewIndex = navigationHistory.length - 1;
  }
  
  // Update back button state
  updateBackButtonState();
  
  // Render the view
  const mainView = document.getElementById('main-view');
  if (view === 'home') {
    mainView.innerHTML = renderHomeContent();
    startHomeTimeInterval();
  } else if (view === 'chat') {
    mainView.innerHTML = renderChatView();
    stopHomeTimeInterval();
    // Initialize chat functionality
    initializeChatFunctionality();
  } else {
    mainView.innerHTML = `<div class='main-view__placeholder'>${view.charAt(0).toUpperCase() + view.slice(1)} Content Placeholder</div>`;
    stopHomeTimeInterval();
  }
}

/**
 * Go back to previous view
 */
function goBack() {
  if (currentViewIndex > 0) {
    currentViewIndex--;
    const previousView = navigationHistory[currentViewIndex];
    navigateToView(previousView);
  }
}

/**
 * Update back button state (enabled/disabled)
 */
function updateBackButtonState() {
  const backButton = document.getElementById('searchbar-back');
  if (backButton) {
    backButton.disabled = currentViewIndex === 0;
    backButton.style.opacity = currentViewIndex === 0 ? '0.5' : '1';
    backButton.style.cursor = currentViewIndex === 0 ? 'not-allowed' : 'pointer';
  }
}


let rightSidebarUserIntent = 'open'; // 'open' or 'closed'

// On DOMContentLoaded, always use renderHomeContent for initial home
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('right-sidebar').style.display = 'flex';
  
  // Initialize back button functionality
  const backButton = document.getElementById('searchbar-back');
  if (backButton) {
    backButton.addEventListener('click', goBack);
    updateBackButtonState(); // Set initial state
  }
  
  const aiCloseBtn = document.querySelector('.ai-top-bar__right .ai-top-bar__btn[title="Close"]');
  if (aiCloseBtn) {
    aiCloseBtn.addEventListener('click', function() {
      document.getElementById('right-sidebar').style.display = 'none';
      rightSidebarUserIntent = 'closed';
    });
  }
  const mainView = document.getElementById('main-view');
  if (document.querySelector('.sidebar__item.active')?.getAttribute('data-view') === 'home') {
    mainView.innerHTML = renderHomeContent();
    startHomeTimeInterval();
  }
});

/**
 * Initialize chat functionality for sending messages
 */
function initializeChatFunctionality() {
  const chatInput = document.querySelector('.chat-compose__input');
  const chatSendBtn = document.querySelector('.chat-compose__send');
  const chatMessages = document.querySelector('.chat-thread__messages');
  
  if (!chatInput || !chatSendBtn || !chatMessages) return;
  
  // Auto-resize textarea
  chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
  });
  
  // Send message on Enter (but allow Shift+Enter for new line)
  chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  });
  
  // Send message on button click
  chatSendBtn.addEventListener('click', sendChatMessage);
  
  // Enable/disable send button based on input
  chatInput.addEventListener('input', function() {
    chatSendBtn.disabled = !this.value.trim();
  });
  
  // Initialize send button state
  chatSendBtn.disabled = !chatInput.value.trim();
}

/**
 * Send a chat message
 */
function sendChatMessage() {
  const chatInput = document.querySelector('.chat-compose__input');
  const message = chatInput.value.trim();
  
  if (!message) return;
  
  // Add message to chat
  addChatMessage('You', message, new Date());
  
  // Clear input and reset height
  chatInput.value = '';
  chatInput.style.height = 'auto';
  
  // Disable send button
  const chatSendBtn = document.querySelector('.chat-compose__send');
  if (chatSendBtn) {
    chatSendBtn.disabled = true;
  }
  
  // Simulate response after a short delay
  setTimeout(() => {
    const responses = [
      "Thanks for the message! I'll get back to you soon.",
      "Got it! Let me review and respond.",
      "Message received. I'll follow up shortly.",
      "Thanks for sharing! I'll take a look.",
      "Noted! I'll get back to you on this."
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    addChatMessage('Nabil Rashad', randomResponse, new Date());
  }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
}

/**
 * Add a message to the chat thread
 */
function addChatMessage(author, message, timestamp) {
  const chatMessages = document.querySelector('.chat-thread__messages');
  if (!chatMessages) return;
  
  const isSelf = author === 'You';
  const timeString = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const messageEl = document.createElement('div');
  messageEl.className = `chat-message ${isSelf ? 'chat-message--self' : 'chat-message--other'}`;
  
  messageEl.innerHTML = `
    <img class="chat-message__avatar" src="assets/avatar.png" alt="Avatar" />
    <div class="chat-message__bubble-group">
      <div class="chat-message__meta">
        <span class="chat-message__author">${author}</span> 
        <span class="chat-message__time">${timeString}</span>
      </div>
      <div class="chat-message__bubble">${message}</div>
    </div>
  `;
  
  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * Toggle the right sidebar (AI panel) when the AI button is clicked
 * Updates user intent for persistent show/hide logic
 */
const aiBtn = document.getElementById('ai-btn');
aiBtn.addEventListener('click', function() {
  const aiPanel = document.getElementById('right-sidebar');
  if (aiPanel.style.display === 'none' || aiPanel.style.display === '') {
    aiPanel.style.display = 'flex';
    rightSidebarUserIntent = 'open';
  } else {
    aiPanel.style.display = 'none';
    rightSidebarUserIntent = 'closed';
  }
});



// 拖动窗口
const osWindow = document.querySelector('.os-window');
const topBar = document.querySelector('.top-bar');
let dragOffset = { x: 0, y: 0 };
let isDragging = false;

topBar.addEventListener('mousedown', (e) => {
  if (e.target.closest('.top-bar__btn')) return; // 不在按钮上拖动
  isDragging = true;
  dragOffset.x = e.clientX - osWindow.offsetLeft;
  dragOffset.y = e.clientY - osWindow.offsetTop;
  document.body.style.userSelect = 'none';
});
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  osWindow.style.left = (e.clientX - dragOffset.x) + 'px';
  osWindow.style.top = (e.clientY - dragOffset.y) + 'px';
});
document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.userSelect = '';
});

// 缩放窗口
let isResizing = false, resizeDir = '', startW, startH, startX, startY, startLeft, startTop;

/**
 * Start resizing the window from any handle
 * @param {MouseEvent} e
 * @param {string} dir - one of n, ne, e, se, s, sw, w, nw
 */
function startResize(e, dir) {
  isResizing = true;
  resizeDir = dir;
  startW = osWindow.offsetWidth;
  startH = osWindow.offsetHeight;
  startX = e.clientX;
  startY = e.clientY;
  startLeft = osWindow.offsetLeft;
  startTop = osWindow.offsetTop;
  document.body.style.userSelect = 'none';
  e.preventDefault();
}

function doResize(e) {
  if (!isResizing) return;
  let dx = e.clientX - startX;
  let dy = e.clientY - startY;
  let newW = startW, newH = startH, newLeft = startLeft, newTop = startTop;
  const minW = 400, minH = 300;
  switch (resizeDir) {
    case 'n':
      newH = Math.max(minH, startH - dy);
      newTop = startTop + dy;
      break;
    case 'ne':
      newH = Math.max(minH, startH - dy);
      newTop = startTop + dy;
      newW = Math.max(minW, startW + dx);
      break;
    case 'e':
      newW = Math.max(minW, startW + dx);
      break;
    case 'se':
      newW = Math.max(minW, startW + dx);
      newH = Math.max(minH, startH + dy);
      break;
    case 's':
      newH = Math.max(minH, startH + dy);
      break;
    case 'sw':
      newH = Math.max(minH, startH + dy);
      newW = Math.max(minW, startW - dx);
      newLeft = startLeft + dx;
      break;
    case 'w':
      newW = Math.max(minW, startW - dx);
      newLeft = startLeft + dx;
      break;
    case 'nw':
      newW = Math.max(minW, startW - dx);
      newLeft = startLeft + dx;
      newH = Math.max(minH, startH - dy);
      newTop = startTop + dy;
      break;
  }
  osWindow.style.width = newW + 'px';
  osWindow.style.height = newH + 'px';
  osWindow.style.left = newLeft + 'px';
  osWindow.style.top = newTop + 'px';
}

function stopResize() {
  isResizing = false;
  document.body.style.userSelect = '';
}

// Attach listeners for all handles
['n','ne','e','se','s','sw','w','nw'].forEach(dir => {
  document.querySelector('.resize-handle--' + dir).addEventListener('mousedown', e => startResize(e, dir));
});
document.addEventListener('mousemove', doResize);
document.addEventListener('mouseup', stopResize);

// traffic light 按钮窗口管理
const greenBtn = document.querySelector('.traffic-light--green');
const yellowBtn = document.querySelector('.traffic-light--yellow');
let prevWindowRect = null;

greenBtn.addEventListener('click', () => {
  if (!osWindow.classList.contains('maximized')) {
    // 记录当前尺寸和位置
    prevWindowRect = {
      left: osWindow.offsetLeft,
      top: osWindow.offsetTop,
      width: osWindow.offsetWidth,
      height: osWindow.offsetHeight
    };
    osWindow.style.left = '0px';
    osWindow.style.top = '0px';
    osWindow.style.width = window.innerWidth + 'px';
    osWindow.style.height = window.innerHeight + 'px';
    osWindow.classList.add('maximized');
  } else {
    // 恢复
    if (prevWindowRect) {
      osWindow.style.left = prevWindowRect.left + 'px';
      osWindow.style.top = prevWindowRect.top + 'px';
      osWindow.style.width = prevWindowRect.width + 'px';
      osWindow.style.height = prevWindowRect.height + 'px';
    }
    osWindow.classList.remove('maximized');
  }
});

yellowBtn.addEventListener('click', () => {
  osWindow.style.width = '400px';
  osWindow.style.height = '300px';
  osWindow.style.left = '100px';
  osWindow.style.top = '100px';
  osWindow.classList.remove('maximized');
});

// AI Chatbot functionality
let aiChatHistory = [];
let isInChatMode = false;

// AI prompt textarea 自适应高度 + send 按钮启用/禁用
const aiPromptInput = document.querySelector('.ai-prompt-input');
const aiPromptSend = document.querySelector('.ai-prompt-field__btn--send');
const aiCanvas = document.querySelector('.ai-canvas');
const aiPromptGrid = document.querySelector('.ai-prompt-grid');

aiPromptInput.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 120) + 'px';
  if (this.value.trim().length > 0) {
    aiPromptSend.disabled = false;
  } else {
    aiPromptSend.disabled = true;
  }
});

// Send message when Enter is pressed (but allow Shift+Enter for new line)
aiPromptInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    if (!aiPromptSend.disabled) {
      sendMessage();
    }
  }
});

// Send button click handler
aiPromptSend.addEventListener('click', function() {
  if (!aiPromptSend.disabled) {
    sendMessage();
  }
});

// Prompt button click handlers
document.querySelectorAll('.ai-prompt-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const message = this.textContent;
    sendPromptMessage(message);
  });
});

// Create New button handler
const createNewBtn = document.querySelector('.ai-top-bar__btn[title="Create New"]');
createNewBtn.addEventListener('click', function() {
  resetToPromptScreen();
});

/**
 * Send a message to AI and display response
 */
/**
 * Send message from input field
 */
async function sendMessage() {
  const message = aiPromptInput.value.trim();
  if (!message) return;
  
  // Switch to chat mode if not already
  if (!isInChatMode) {
    switchToChatMode();
  }
  
  // Add user message to chat
  addMessageToChat('user', message);
  
  // Clear input
  aiPromptInput.value = '';
  aiPromptInput.style.height = 'auto';
  aiPromptSend.disabled = true;
  
  // Add loading indicator
  const loadingMessage = addLoadingMessage();
  
  try {
    // Get AI response
    const response = await generateAIResponse(message);
    
    // Remove loading message and add AI response
    removeLoadingMessage(loadingMessage);
    addMessageToChat('ai', response);
    
  } catch (error) {
    // Remove loading message and add error response
    removeLoadingMessage(loadingMessage);
    addMessageToChat('ai', '⚠️ Sorry, I encountered an error. Please try again.');
  }
}

/**
 * Send a prompt message (from prompt buttons)
 */
/**
 * Send a prompt message and get AI response
 * @param {string} message - The user's message
 */
async function sendPromptMessage(message) {
  // Switch to chat mode
  switchToChatMode();
  
  // Add user message to chat
  addMessageToChat('user', message);
  
  // Add loading indicator
  const loadingMessage = addLoadingMessage();
  
  try {
    // Get AI response
    const response = await generateAIResponse(message);
    
    // Remove loading message and add AI response
    removeLoadingMessage(loadingMessage);
    addMessageToChat('ai', response);
    
  } catch (error) {
    // Remove loading message and add error response
    removeLoadingMessage(loadingMessage);
    addMessageToChat('ai', '⚠️ Sorry, I encountered an error. Please try again.');
  }
}

/**
 * Add a loading message to the chat
 * @returns {HTMLElement} - The loading message element
 */
function addLoadingMessage() {
  const chatContainer = document.querySelector('.ai-chat-container');
  const messagesContainer = chatContainer.querySelector('.ai-chat-messages');
  
  const loadingEl = document.createElement('div');
  loadingEl.className = 'ai-chat-message ai-chat-message--ai ai-chat-message--loading';
  loadingEl.innerHTML = `
    <div class="ai-chat-message__avatar">
      <img src="assets/ai-companion-144.png" alt="AI Companion" />
    </div>
    <div class="ai-chat-message__content">
      <div class="ai-chat-message__text">
        <div class="ai-loading-text">
          Thinking<span class="ai-loading-dots">...</span>
        </div>
      </div>
    </div>
  `;
  
  messagesContainer.appendChild(loadingEl);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  return loadingEl;
}

/**
 * Remove a loading message from the chat
 * @param {HTMLElement} loadingMessage - The loading message element to remove
 */
function removeLoadingMessage(loadingMessage) {
  if (loadingMessage && loadingMessage.parentNode) {
    loadingMessage.parentNode.removeChild(loadingMessage);
  }
}

/**
 * Switch from prompt screen to chat mode
 */
function switchToChatMode() {
  isInChatMode = true;
  
  // Hide prompt grid
  aiPromptGrid.style.display = 'none';
  
  // Create chat container
  const chatContainer = document.createElement('div');
  chatContainer.className = 'ai-chat-container';
  chatContainer.innerHTML = `
    <div class="ai-chat-messages"></div>
  `;
  
  // Replace canvas content
  aiCanvas.innerHTML = '';
  aiCanvas.appendChild(chatContainer);
}

/**
 * Add a message to the chat
 */
function addMessageToChat(sender, message) {
  const chatContainer = document.querySelector('.ai-chat-container');
  const messagesContainer = chatContainer.querySelector('.ai-chat-messages');
  
  const messageEl = document.createElement('div');
  messageEl.className = `ai-chat-message ai-chat-message--${sender}`;
  
  const avatar = sender === 'user' ? 'assets/avatar.png' : 'assets/ai-companion-144.png';
  const name = sender === 'user' ? 'You' : 'AI Companion';
  
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  if (sender === 'ai') {
    messageEl.innerHTML = `
      <div class="ai-chat-message__avatar">
        <img src="${avatar}" alt="${name}" />
      </div>
      <div class="ai-chat-message__content">
        <div class="ai-chat-message__text">${message}</div>
        <div class="ai-chat-message__actions">
          <button class="ai-chat-message__action-btn" title="Thumbs up">
            <img src="assets/thumb-up.svg" alt="Thumbs up" />
          </button>
          <button class="ai-chat-message__action-btn" title="Thumbs down">
            <img src="assets/thumb-down.svg" alt="Thumbs down" />
          </button>
          <button class="ai-chat-message__action-btn" title="Copy">
            <img src="assets/copy.svg" alt="Copy" />
          </button>
          <button class="ai-chat-message__action-btn" title="More">
            <img src="assets/more.svg" alt="More" />
          </button>
        </div>
      </div>
    `;
  } else {
    messageEl.innerHTML = `
      <div class="ai-chat-message__avatar">
        <img src="${avatar}" alt="${name}" />
      </div>
      <div class="ai-chat-message__content">
        <div class="ai-chat-message__text">${message}</div>
        <div class="ai-chat-message__timestamp">${timestamp}</div>
      </div>
    `;
  }
  
  messagesContainer.appendChild(messageEl);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  // Add event listeners for AI message action buttons
  if (sender === 'ai') {
    const actionButtons = messageEl.querySelectorAll('.ai-chat-message__action-btn');
    
    // Thumbs up button
    actionButtons[0].addEventListener('click', function() {
      this.style.background = 'rgba(39, 201, 63, 0.12)';
      this.querySelector('img').style.opacity = '1';
      console.log('Thumbs up clicked for AI message');
    });
    
    // Thumbs down button
    actionButtons[1].addEventListener('click', function() {
      this.style.background = 'rgba(255, 95, 86, 0.12)';
      this.querySelector('img').style.opacity = '1';
      console.log('Thumbs down clicked for AI message');
    });
    
    // Copy button
    actionButtons[2].addEventListener('click', function() {
      navigator.clipboard.writeText(message).then(() => {
        // Visual feedback for copy
        const originalText = this.querySelector('img').alt;
        this.querySelector('img').alt = 'Copied!';
        this.style.background = 'rgba(11, 92, 255, 0.12)';
        
        setTimeout(() => {
          this.querySelector('img').alt = originalText;
          this.style.background = 'transparent';
        }, 1000);
        
        console.log('Message copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy message: ', err);
      });
    });
    
    // More button
    actionButtons[3].addEventListener('click', function() {
      console.log('More options clicked for AI message');
      // TODO: Implement dropdown menu or additional actions
    });
  }
  
  // Store in history
  aiChatHistory.push({ sender, message, timestamp: new Date() });
}

/**
 * Reset to prompt screen
 */
function resetToPromptScreen() {
  isInChatMode = false;
  aiChatHistory = [];
  
  // Clear input
  aiPromptInput.value = '';
  aiPromptInput.style.height = 'auto';
  aiPromptSend.disabled = true;
  
  // Restore original canvas content
  aiCanvas.innerHTML = `
    <div class="ai-canvas__center">
      <img src="assets/ai-companion-144.png" alt="AI Companion" class="ai-canvas__logo" />
      <div class="ai-prompt-grid">
        <button class="ai-prompt-btn">What meetings do I have today?</button>
        <button class="ai-prompt-btn">Brainstorm ideas for a team bonding activity</button>
        <button class="ai-prompt-btn">Set my meeting scheduling preferences</button>
        <button class="ai-prompt-btn">Tell me what I can do with AI Companion</button>
      </div>
    </div>
  `;
  
  // Re-attach event listeners to new prompt buttons
  document.querySelectorAll('.ai-prompt-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const message = this.textContent;
      sendPromptMessage(message);
    });
  });
}

/**
 * Configuration
 * Uses Vercel API for secure OpenAI calls
 */
const API_URL = '/api/openai';

/**
 * System prompt for the AI Companion
 */
const AI_COMPANION_SYSTEM_PROMPT = `You are Zoom AI Companion, a helpful assistant integrated into the Zoom desktop application. You help users with:

- Meeting management and scheduling
- Team collaboration and communication
- Calendar optimization and time management
- Task prioritization and productivity
- File organization and sharing
- General workplace assistance

You should:
- Be concise but helpful
- Provide practical, actionable advice
- Use a friendly, professional tone
- Format responses clearly with bullet points when appropriate
- Ask follow-up questions to better assist users
- Focus on Zoom-related and workplace productivity topics

Keep responses under 200 words unless the user specifically asks for more detail.`;

/**
 * Generate AI response using OpenAI API
 * @param {string} userMessage - The user's message
 * @returns {Promise<string>} - The AI response
 */
async function generateAIResponse(userMessage) {
  try {
    console.log('Attempting API call via Vercel...');

    // Prepare the conversation history
    const messages = [
      { role: 'system', content: AI_COMPANION_SYSTEM_PROMPT },
      ...aiChatHistory.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.message
      })),
      { role: 'user', content: userMessage }
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', errorData);
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();

  } catch (error) {
    console.error('Error generating AI response:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      statusText: error.statusText
    });
    
    // Return user-friendly error message
    if (error.message.includes('API key')) {
      return '⚠️ API key configuration error. Please check your environment variables.';
    } else if (error.message.includes('rate limit')) {
      return '⚠️ Rate limit exceeded. Please wait a moment and try again.';
    } else if (error.message.includes('quota')) {
      return '⚠️ API quota exceeded. Please check your OpenAI account.';
    } else if (error.message.includes('CORS')) {
      return '⚠️ CORS error. Please check your browser settings or try a different browser.';
    } else {
      return `⚠️ Sorry, I encountered an error: ${error.message}. Please try again in a moment.`;
    }
  }
}

/**
 * Update the home view time and date
 */
function updateHomeTimeAndDate() {
  const timeEl = document.getElementById('home-time');
  const dateEl = document.getElementById('home-date');
  if (!timeEl || !dateEl) return;
  const now = new Date();
  // Format time: h:mm AM/PM
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  timeEl.textContent = `${hours}:${minutes} ${ampm}`;
  // Format date: Weekday, Month Day
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}

/**
 * Start interval to update home time/date if on home view
 */
let homeTimeInterval = null;
function startHomeTimeInterval() {
  updateHomeTimeAndDate();
  if (homeTimeInterval) clearInterval(homeTimeInterval);
  homeTimeInterval = setInterval(updateHomeTimeAndDate, 1000);
}
function stopHomeTimeInterval() {
  if (homeTimeInterval) clearInterval(homeTimeInterval);
  homeTimeInterval = null;
}

/**
 * Auto-hide right sidebar when os-window is too narrow
 */
function handleOsWindowResize() {
  const osWindow = document.querySelector('.os-window');
  const rightSidebar = document.getElementById('right-sidebar');
  if (!osWindow || !rightSidebar) return;
  if (osWindow.offsetWidth < 1024) {
    if (rightSidebar.style.display !== 'none') {
      rightSidebar.style.display = 'none';
    }
  } else {
    // Restore to last user intent
    if (rightSidebarUserIntent === 'open' && rightSidebar.style.display !== 'flex') {
      rightSidebar.style.display = 'flex';
    } else if (rightSidebarUserIntent === 'closed' && rightSidebar.style.display !== 'none') {
      rightSidebar.style.display = 'none';
    }
  }
}

// Listen for os-window resize
new ResizeObserver(handleOsWindowResize).observe(document.querySelector('.os-window'));
// Also call on DOMContentLoaded in case window starts small
window.addEventListener('DOMContentLoaded', handleOsWindowResize); 