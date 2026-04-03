// Open-Meteo API Service (Free, no API key required)
export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  uvIndex: number;
  feelsLike: number;
  visibility: number;
}

export interface ForecastData {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  precipitation: number;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  name: string;
  timezone: string;
}

// Weather condition codes mapping
const weatherCodes: { [key: number]: string } = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};

export const getWeatherIcon = (code: number, isDay: boolean = true) => {
  const isDaytime = isDay ? '☀️' : '🌙';
  
  if (code === 0) return isDaytime;
  if (code === 1 || code === 2) return isDaytime === '☀️' ? '⛅' : '🌤️';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code >= 51 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 86) return '❄️';
  if (code >= 80 && code <= 82) return '⛈️';
  if (code >= 85 && code <= 86) return '❄️';
  if (code >= 95 && code <= 99) return '⛈️';
  
  return isDaytime;
};

export const getWeatherCondition = (code: number): string => {
  return weatherCodes[code] || 'Unknown';
};

export const fetchWeatherData = async (
  latitude: number,
  longitude: number
): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,visibility,uv_index&timezone=auto`
    );

    if (!response.ok) throw new Error('Failed to fetch weather data');

    const data = await response.json();
    const current = data.current;

    return {
      temperature: Math.round(current.temperature_2m),
      condition: getWeatherCondition(current.weather_code),
      humidity: current.relative_humidity_2m,
      windSpeed: Math.round(current.wind_speed_10m),
      precipitation: current.precipitation || 0,
      uvIndex: current.uv_index,
      feelsLike: Math.round(current.apparent_temperature),
      visibility: current.visibility / 1000,
    };
  } catch (error) {
    console.error('Error fetching

cat > client/src/pages/Weather.tsx << 'EOF'
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Alert,
  AlertIcon,
  Spinner,
  VStack,
  HStack,
  Text,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  fetchWeatherData,
  fetchForecast,
  getCurrentLocation,
  getWeatherIcon,
  WeatherData,
  ForecastData,
  LocationData,
} from '../lib/weatherService';

export const Weather: React.FC = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState('');

  const cities: { [key: string]: { lat: number; lon: number } } = {
    'New York': { lat: 40.7128, lon: -74.006 },
    'London': { lat: 51.5074, lon: -0.1278 },
    'Tokyo': { lat: 35.6762, lon: 139.6503 },
    'Paris': { lat: 48.8566, lon: 2.3522 },
    'Sydney': { lat: -33.8688, lon: 151.2093 },
    'Dubai': { lat: 25.2048, lon: 55.2708 },
    'Singapore': { lat: 1.3521, lon: 103.8198 },
    'Toronto': { lat: 43.6532, lon: -79.3832 },
  };

  const loadWeatherData = async (lat: number, lon: number, name?: string) => {
    setLoading(true);
    setError(null);

    try {
      const weatherData = await fetchWeatherData(lat, lon);
      const forecastData = await fetchForecast(lat, lon, 7);

      setWeather(weatherData);
      setForecast(forecastData);
      setLocation({
        latitude: lat,
        longitude: lon,
        name: name || `${lat.toFixed(2)}, ${lon.toFixed(2)}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleGetCurrentLocation = async () => {
    try {
      const currentLocation = await getCurrentLocation();
      await loadWeatherData(
        currentLocation.latitude,
        currentLocation.longitude,
        currentLocation.name
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get current location');
    }
  };

  const handleSearchCity = () => {
    const city = searchInput.trim();
    const coords = cities[city];

    if (coords) {
      loadWeatherData(coords.lat, coords.lon, city);
      setSearchInput('');
    } else {
      setError(`City "${city}" not found. Available cities: ${Object.keys(cities).join(', ')}`);
    }
  };

  useEffect(() => {
    handleGetCurrentLocation();
  }, []);

  return (
    <Container maxW="7xl" py={8}>
      <VStack spacing={6} align="stretch">
        <Box>
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            🌤️ Weather Dashboard
          </Text>
          <Text color="gray.600">
            Real-time weather data powered by Open-Meteo API
          </Text>
        </Box>

        <Card>
          <CardContent pt={6}>
            <VStack spacing={4}>
              <HStack w="full" spacing={2}>
                <Input
                  placeholder="Search city (e.g., London, Tokyo, Paris)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchCity()}
                />
                <Button onClick={handleSearchCity} colorScheme="blue">
                  Search
                </Button>
                <Button onClick={handleGetCurrentLocation} colorScheme="teal">
                  Current Location
                </Button>
              </HStack>
              <Text fontSize="sm" color="gray.500">
                Available cities: {Object.keys(cities).join(', ')}
              </Text>
            </VStack>
          </CardContent>
        </Card>

        {error && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {loading && (
          <Box textAlign="center" py={8}>
            <Spinner size="lg" />
            <Text mt={4}>Loading weather data...</Text>
          </Box>
        )}

        {weather && location && !loading && (
          <>
            <Card bg="gradient.500" color="white">
              <CardContent pt={8}>
                <Grid templateColumns="1fr 1fr" gap={8}>
                  <VStack align="start" spacing={4} justify="center">
                    <Text fontSize="4xl" fontWeight="bold">
                      {location.name}
                    </Text>
                    <Text fontSize="lg" opacity={0.9}>
                      {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Text>
                    <Box>
                      <Text fontSize="6xl" fontWeight="bold">
                        {weather.temperature}°C
                      </Text>
                      <Text fontSize="xl" opacity={0.9}>
                        {weather.condition}
                      </Text>
                    </Box>
                    <Text opacity={0.9}>
                      Feels like {weather.feelsLike}°C
                    </Text>
                  </VStack>

                  <SimpleGrid columns={2} spacing={4}>
                    <Box bg="whiteAlpha.200" p={4} borderRadius="lg">
                      <Text fontSize="sm" opacity={0.8}>
                        Humidity
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold">
                        {weather.humidity}%
                      </Text>
                    </Box>
                    <Box bg="whiteAlpha.200" p={4} borderRadius="lg">
                      <Text fontSize="sm" opacity={0.8}>
                        Wind Speed
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold">
                        {weather.windSpeed} km/h
                      </Text>
                    </Box>
                    <Box bg="whiteAlpha.200" p={4} borderRadius="lg">
                      <Text fontSize="sm" opacity={0.8}>
                        UV Index
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold">
                        {Math.round(weather.uvIndex)}
                      </Text>
                    </Box>
                    <Box bg="whiteAlpha.200" p={4} borderRadius="lg">
                      <Text fontSize="sm" opacity={0.8}>
                        Visibility
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold">
                        {weather.visibility.toFixed(1)} km
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Grid>
              </CardContent>
            </Card>

            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb={4}>
                7-Day Forecast
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 7 }} spacing={4}>
                {forecast.map((day, index) => (
                  <Card key={index}>
                    <CardContent pt={6}>
                      <VStack spacing={3} align="center">
                        <Text fontSize="sm" fontWeight="semibold">
                          {new Date(day.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </Text>
                        <Text fontSize="3xl">
                          {getWeatherIcon(index % 2 === 0 ? 0 : 2)}
                        </Text>
                        <Text fontSize="xs" textAlign="center" color="gray.600">
                          {day.condition}
                        </Text>
                        <HStack spacing={2}>
                          <Badge colorScheme="red">{day.maxTemp}°</Badge>
                          <Badge colorScheme="blue">{day.minTemp}°</Badge>
                        </HStack>
                        {day.precipitation > 0 && (
                          <Badge colorScheme="cyan">
                            💧 {day.precipitation.toFixed(1)}mm
                          </Badge>
                        )}
                      </VStack>
                    </CardContent>
                  </Card>
                ))}
              </SimpleGrid>
            </Box>

            <Card>
              <CardContent pt={6}>
                <Text fontSize="sm" color="gray.600">
                  <strong>Coordinates:</strong> {location.latitude.toFixed(4)},
                  {location.longitude.toFixed(4)} | <strong>Timezone:</strong>{' '}
                  {location.timezone}
                </Text>
              </CardContent>
            </Card>
          </>
        )}

        {!loading && !weather && !error && (
          <Card>
            <CardContent py={12} textAlign="center">
              <Text fontSize="lg" color="gray.600">
                Click "Current Location" to load weather data or search for a city
              </Text>
            </CardContent>
          </Card>
        )}
      </VStack>
    </Container>
  );
};

export default Weather;
