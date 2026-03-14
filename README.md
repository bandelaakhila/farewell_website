# Senior Farewell Memories Website

A beautiful farewell-themed website designed to showcase a video compilation of senior memories.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Elegant Theme**: Professional farewell styling with gradients and animations
- **Video Display**: Central video player with overlay and controls
- **Animated Statistics**: Dynamic counters for days, memories, and friends
- **Admin Upload**: Secure video upload functionality (Ctrl+Shift+V)
- **Parallax Effects**: Smooth scrolling and header animations

## How to Use

### For Viewing:
1. Open `index.html` in a web browser
2. The website will display with a placeholder for the video
3. Once the video is uploaded, it will play automatically

### For Video Upload (Admin):
1. Press `Ctrl+Shift+V` on the website
2. Enter admin password: `farewell2024`
3. Select your video file and upload
4. The video will be available immediately

## File Structure

```
farewell_website/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This file
└── placeholder.jpg     # Video poster image (create if needed)
```

## Getting the URL for QR Code

To get the website URL for your QR code:

1. **Local Testing**: 
   - Open `index.html` in your browser
   - The URL will be: `file:///c:/Users/HP/OneDrive/Desktop/farewell_website/index.html`

2. **For Sharing** (Recommended):
   - Upload the entire `farewell_website` folder to a web host
   - Common options:
     - GitHub Pages (free)
     - Netlify (free)
     - Vercel (free)
     - Any web hosting service

3. **Example URLs**:
   - GitHub Pages: `https://yourusername.github.io/farewell_website/`
   - Netlify: `https://your-project-name.netlify.app`

## QR Code Instructions

1. Once you have your website URL, use any QR code generator online
2. Enter your website URL
3. Download the QR code image
4. Print it on your farewell gift cards

## Video Requirements

- **Format**: MP4 (recommended)
- **Size**: Under 100MB for web optimization
- **Resolution**: 1920x1080 or 1280x720
- **Length**: 3-10 minutes recommended

## Customization

### Changing Colors:
Edit `styles.css` and modify the gradient values in:
- `.body` background gradient
- `.header` background gradient
- `.hero-section` background gradient

### Changing Text:
Edit `index.html` and modify:
- Main title and subtitle
- Section headings
- Message content

### Changing Statistics:
Edit `script.js` and modify the `stats` array with your target values.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Troubleshooting

- **Video not playing**: Check video format and browser compatibility
- **Styles not loading**: Ensure CSS file path is correct
- **Animations not working**: Check JavaScript console for errors

## Support

For any issues or questions, ensure all files are in the same directory and the video file format is supported.
