# 🌤️ Weather App

A beautiful and modern weather application that provides real-time weather information for any location worldwide. Built with Node.js, Express, and a stunning glassmorphism UI.

![Weather App](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 🌍 **Global Weather Data** - Get weather information for any city worldwide
- 📍 **Geolocation** - Accurate location coordinates (latitude & longitude)
- 🌡️ **Temperature** - Real-time temperature readings
- 🎨 **Modern UI** - Beautiful glassmorphism design with animated effects
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** - Optimized performance with minimal dependencies

## 🖼️ Screenshots

### Main Interface
- Dark glassmorphism card with blur effects
- Cloud background for weather atmosphere
- Smooth animations and hover effects
- Real-time data display with icons

##  Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Mapbox API Token (free tier available)
- Weatherstack API Key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Janaelpardisi/Node.js-Weather-App.git
   cd Node.js-Weather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your API keys:
   ```env
   MAPBOX_TOKEN=your_mapbox_token_here
   WEATHERSTACK_KEY=your_weatherstack_key_here
   PORT=3000
   ```

4. **Start the server**
   ```bash
   node src/app.js
   ```

5. **Open your browser**
   
   Navigate to: `http://localhost:3000`

## 🔑 Getting API Keys

### Mapbox Token
1. Go to [Mapbox Sign Up](https://account.mapbox.com/auth/signup/)
2. Create a free account
3. Navigate to [Access Tokens](https://account.mapbox.com/access-tokens/)
4. Copy your default public token or create a new one
5. Paste it in your `.env` file as `MAPBOX_TOKEN`

### Weatherstack API Key
1. Go to [Weatherstack Sign Up](https://weatherstack.com/signup/free)
2. Create a free account (1000 requests/month)
3. Copy your API Access Key from the dashboard
4. Paste it in your `.env` file as `WEATHERSTACK_KEY`

## 📁 Project Structure

```
weatherapp/
├── src/
│   ├── app.js                 # Main Express server
│   └── data/
│       ├── geo.js             # Mapbox geocoding API handler
│       └── forcastcode.js     # Weatherstack weather API handler
├── puplic/
│   ├── index.html             # Frontend UI
│   ├── style.css              # Styling and animations
│   └── script.js              # Frontend JavaScript logic
├── .env                       # Environment variables (not in repo)
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore file
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

##  Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **dotenv** - Environment variable management
- **request** - HTTP client for API calls

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with glassmorphism effects
- **Vanilla JavaScript** - No frameworks, pure JS
- **Fetch API** - Async HTTP requests

### APIs
- **Mapbox Geocoding API** - Convert city names to coordinates
- **Weatherstack API** - Fetch real-time weather data

##  API Endpoints

### GET `/weather`

Get weather information for a specific location.

**Query Parameters:**
- `address` (required) - City name or location

**Example Request:**
```bash
GET http://localhost:3000/weather?address=Cairo
```

**Example Response:**
```json
{
  "longitude": 31.2357,
  "latitude": 30.0444,
  "location": "Cairo, Egypt",
  "temperature": 25
}
```

**Error Response:**
```json
{
  "error": "Unable to find location"
}
```

##  UI Features

- **Glassmorphism Design** - Semi-transparent cards with backdrop blur
- **Cloud Background** - Atmospheric weather-themed background
- **Smooth Animations** - Fade-in, slide-in, and hover effects
- **Loading State** - Animated spinner while fetching data
- **Error Handling** - User-friendly error messages
- **Responsive Layout** - Mobile-first design approach

##  Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MAPBOX_TOKEN` | Mapbox API access token | Yes | - |
| `WEATHERSTACK_KEY` | Weatherstack API key | Yes | - |
| `PORT` | Server port number | No | 3000 |

### Running on Different Port

To run the server on a different port, set the `PORT` environment variable:

```bash
PORT=5000 node src/app.js
```

Or add it to your `.env` file:
```env
PORT=5000
```

##  Troubleshooting

### "Not Authorized - Invalid Token" Error
- Verify your API tokens are correct in `.env`
- Ensure you're running the server from the correct directory
- Check that `.env` file is in the root directory (not in `src/`)

### Server Can't Find `.env` File
- Make sure you're running `node src/app.js` from the **root directory** (not from inside `src/`)
- Verify `.env` file exists in the root folder

### API Rate Limits
- **Mapbox Free Tier**: 100,000 requests/month
- **Weatherstack Free Tier**: 1,000 requests/month
- Consider upgrading plans if you exceed these limits

##  Development

### Running in Development Mode
```bash
node src/app.js
```

### Testing API Endpoints
```bash
# Test with curl
curl "http://localhost:3000/weather?address=London"

# Test with browser
http://localhost:3000/weather?address=Paris
```

##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the LICENSE file for details.


##  Acknowledgments

- [Mapbox](https://www.mapbox.com/) for geocoding services
- [Weatherstack](https://weatherstack.com/) for weather data
- [Unsplash](https://unsplash.com/) for beautiful background images
- Icons: Emoji icons for a modern look



Made By: Jana Ashraf
