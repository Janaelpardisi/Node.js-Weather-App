// Elements
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const results = document.getElementById('results');

// Result elements
const countryEl = document.getElementById('country');
const latitudeEl = document.getElementById('latitude');
const longitudeEl = document.getElementById('longitude');
const temperatureEl = document.getElementById('temperature');

// Event Listeners
getWeatherBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather();
    }
});

// Get Weather Function
async function getWeather() {
    const city = cityInput.value.trim();

    // Validation
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    // Reset UI
    hideError();
    hideResults();
    showLoading();

    try {
        // Call our backend API
        const response = await fetch(`/weather?address=${encodeURIComponent(city)}`);
        const data = await response.json();

        hideLoading();

        // Check for error
        if (data.error) {
            showError(data.error);
            return;
        }

        // Display results
        displayResults(data);

    } catch (err) {
        hideLoading();
        showError('Unable to connect to the server. Please try again.');
        console.error('Error:', err);
    }
}

// Display Results
function displayResults(data) {
    countryEl.textContent = data.location || 'N/A';
    latitudeEl.textContent = data.latitude ? data.latitude.toFixed(4) : 'N/A';
    longitudeEl.textContent = data.longitude ? data.longitude.toFixed(4) : 'N/A';
    temperatureEl.textContent = data.temperature ? `${data.temperature}°C` : 'N/A';

    showResults();
}

// UI Helper Functions
function showLoading() {
    loading.classList.remove('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}

function showError(message) {
    error.textContent = message;
    error.classList.remove('hidden');
}

function hideError() {
    error.classList.add('hidden');
}

function showResults() {
    results.classList.remove('hidden');
}

function hideResults() {
    results.classList.add('hidden');
}
