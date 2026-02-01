# 💝 Valentine's Day Surprise

A modern, interactive Valentine's Day website to ask someone special on a date. Features a playful "impossible to click No button" and beautiful animations.

![Preview](https://img.shields.io/badge/Status-Ready-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **Modern Dark UI** - Sophisticated design inspired by Stripe, Linear, and Vercel
- **Interactive No Button** - Escapes when you try to click it (infinite loop!)
- **Multi-step Date Planning** - Choose date, time, and type of date
- **Confetti Celebration** - Dynamic particle effects
- **Email Notifications** - Silent background notification via Web3Forms
- **Fully Responsive** - Works perfectly on mobile and desktop
- **No Framework** - Pure HTML/CSS/JS for fast loading

## 🚀 Live Demo

**Deploy to GitHub Pages:**
1. Fork this repo
2. Go to Settings → Pages
3. Select `main` branch → Save
4. Visit `https://rithik1007.github.io/your-repo-name`

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/rithik1007/valentine-surprise.git

# Navigate to the folder
cd valentine-surprise

# Open in browser
start index.html
```

## ⚙️ Configuration

### Email Notifications Setup

**⚠️ IMPORTANT:** `script.js` is gitignored to protect credentials. You need to set it up locally:

1. Copy `script.template.js` to `script.js`:
   ```bash
   copy script.template.js script.js
   ```

2. Get your free Web3Forms API key from [web3forms.com](https://web3forms.com)

3. Open `script.js` and update lines 6-7:
   ```javascript
   const YOUR_EMAIL = 'your.email@gmail.com';           // Your email
   const WEB3FORMS_ACCESS_KEY = 'your-access-key-here'; // Your API key
   ```

4. Save and test locally before deploying

## 🎨 Customization

### Change Colors
Edit `styles.css` to customize the color scheme:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
```

### Change Messages
Edit `script.js` to customize the funny messages:

```javascript
const funnyMessages = [
    "Are you sure? 🥺",
    "Really? Give it another thought! 💭",
    // Add your own messages...
];
```

### Change Questions
Edit `index.html` to customize the date options:

```html
<button class="option-btn" data-date="Your Option">Your Text 🎉</button>
```

## 🌐 Deployment Options

| Platform | Difficulty | Time | URL Format |
|----------|-----------|------|------------|
| **GitHub Pages** | Easy | 2 min | username.github.io/repo |
| **Netlify** | Easiest | 1 min | custom.netlify.app |
| **Vercel** | Easy | 2 min | custom.vercel.app |
| **Surge.sh** | Easy | 1 min | custom.surge.sh |

### Quick Deploy to Netlify
1. Drag the folder to [netlify.com/drop](https://netlify.com/drop)
2. Done! Get instant URL

### Quick Deploy to Vercel
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy!

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## 🛠️ Tech Stack

- HTML5
- CSS3 (with modern features like backdrop-filter)
- Vanilla JavaScript (ES6+)
- Canvas API (for confetti)
- Web3Forms API (for email notifications)

## 📄 File Structure

```
valentine-surprise/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # Documentation
```

## 🎯 How It Works

1. **Initial Screen**: User sees "Yes" and "No" buttons
2. **No Button Escape**: When hovering over "No", button jumps away
3. **Infinite Loop**: Button never disappears, keeps escaping
4. **Yes Click**: Triggers confetti and moves to next screen
5. **Date Planning**: User selects date, time, and type
6. **Celebration**: Shows summary and sends email notification
7. **Silent Notification**: You receive email with all details

## 🤝 Contributing

Feel free to fork and customize! This is open for personal use.

## 📝 License

MIT License - feel free to use for your own Valentine's surprise!

## 💡 Tips

- Test the email notification before sending to your special someone
- Customize the messages to make it more personal
- Consider adding your own photos or customizing emojis
- Deploy early to test on mobile

## ❤️ Made with Love

Created for asking someone special on a date. Good luck! 🍀

---

**Star ⭐ this repo if you found it useful!**
