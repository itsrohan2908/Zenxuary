# Zenxuary - Creative Community Platform

A beautiful and modern social platform for creators to share their work, connect with others, and discover amazing content.

## 🌟 Live Demo

**Visit the live demo:** [Deploy to Render/Railway for live demo]

*Note: This is a full-stack Node.js application. For live demo, you'll need to deploy it to a platform that supports Node.js applications.*

## 🚀 Features

- **Modern UI/UX**: Clean and responsive design with Bootstrap 5
- **Navigation**: Intuitive sidebar navigation with icons
- **Search Functionality**: Interactive search bar with toggle functionality
- **Profile System**: User profiles with customizable sections
- **Content Discovery**: Explore page to discover community content
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Icons**: Font Awesome 6
- **Backend**: Node.js, Express.js (for full version)
- **Database**: MongoDB (for full version)
- **Template Engine**: EJS (for full version)

## 📁 Project Structure

```
Zenxuary/
├── index.html              # Main homepage
├── explore.html            # Content discovery page
├── create.html             # Content creation page
├── messages.html           # Messaging interface
├── profile.html            # User profile page
├── settings.html           # Settings page
├── notification.html       # Notifications page
├── public/                 # Static assets
│   ├── css/               # Stylesheets
│   └── images/            # Images and media
├── views/                  # EJS templates (for full version)
├── models/                 # Database models (for full version)
├── app.js                  # Express server (for full version)
└── package.json           # Dependencies
```

## 🎨 Design Features

- **Pink Theme**: Beautiful pink color scheme throughout
- **Card Layouts**: Modern card-based content presentation
- **Hover Effects**: Smooth animations and transitions
- **Typography**: Clean and readable fonts
- **Spacing**: Consistent spacing and padding

## 🔧 Setup Instructions

### For Static Demo (GitHub Pages)
1. Clone the repository
2. Open `index.html` in your browser
3. Navigate through the different pages

### For Full Version (Local Development)
1. Install Node.js and MongoDB
2. Run `npm install`
3. Start MongoDB service
4. Run `node app.js`
5. Visit `http://localhost:3000`

## 📱 Pages Available

- **Home** (`index.html`): Welcome page with featured content
- **Explore** (`explore.html`): Discover community content
- **Create** (`create.html`): Share your creations
- **Messages** (`messages.html`): Communication interface
- **Profile** (`profile.html`): User profile management
- **Settings** (`settings.html`): Account settings
- **Notifications** (`notification.html`): Notification center

## 🌐 Deployment

### Option 1: Render (Recommended - Free)
1. Go to [render.com](https://render.com) and sign up
2. Connect your GitHub repository
3. Create a new Web Service
4. Select your Zenxuary repository
5. Set build command: `npm install`
6. Set start command: `npm start`
7. Add environment variable: `MONGODB_URI` (get from MongoDB Atlas)
8. Deploy!

### Option 2: Railway
1. Go to [railway.app](https://railway.app) and sign up
2. Connect your GitHub repository
3. Deploy automatically
4. Add MongoDB database from Railway dashboard

### Option 3: Heroku
1. Install Heroku CLI
2. Run `heroku create zenxuary-app`
3. Add MongoDB addon: `heroku addons:create mongolab`
4. Deploy: `git push heroku main`

### Local Development
1. Install Node.js and MongoDB
2. Run `npm install`
3. Start MongoDB service
4. Run `npm start`
5. Visit `http://localhost:3000`

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Created by **Rohan** - A passionate developer building creative solutions.

---

**Note**: This is a demo version showcasing the frontend design. The full version includes backend functionality with Node.js, Express, and MongoDB.
