# 🔧 Quick Setup Guide

Follow these steps to configure the website with your credentials:

## Step 1: Get Web3Forms API Key (Free!)

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address
3. Click "Create Access Key"
4. Copy the key (looks like: `a1b2c3d4-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

## Step 2: Configure Your Details

Open `script.js` and update lines 5-6:

```javascript
const YOUR_EMAIL = 'your.email@gmail.com';           // ⚠️ Your email here
const WEB3FORMS_ACCESS_KEY = 'your-key-here';        // ⚠️ Your API key here
```

## Step 3: Test Locally

1. Open `index.html` in your browser
2. Complete all the questions
3. Check your email - you should receive the notification!

## Step 4: Deploy

Once tested, deploy to:
- **GitHub Pages**: Settings → Pages → Deploy from `main` branch
- **Netlify**: Drag folder to netlify.com/drop
- **Vercel**: Import your GitHub repo

## 🎉 That's it!

Your Valentine's surprise is ready to go!

---

**Need help?** Check the main [README.md](README.md) for more details.
