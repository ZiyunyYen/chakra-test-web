import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
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
        name: name || `${lat}, ${lon}`,
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
      await loadWeatherData(currentLocation.latitude, currentLocation.longitude, currentLocation.name);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get location');
    }
  };

  const handleSearchCity = () => {
    const city = searchInput.trim();
    const coords = cities[city];
    if (coords) {
      loadWeatherData(coords.lat, coords.lon, city);
      setSearchInput('');
    } else {
      setError(`City not found`);
    }
  };

  useEffect(() => {
    handleGetCurrentLocation();
  }, []);

  return (
    <Container maxW="7xl" py={8}>
      <VStack spacing={6} align="stretch">
        <Text fontSize="3xl" fontWeight="bold">Weather Dashboard</Text>

        <Card>
          <CardContent pt={6}>
            <HStack w="full" spacing={2}>
              <Input placeholder="Search city" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
              <Button onClick={handleSearchCity} colorScheme="blue">Search</Button>
              <Button onClick={handleGetCurrentLocation} colorScheme="teal">Current Location</Button>
            </HStack>
          </CardContent>
        </Card>

        {error && <Alert status="error"><AlertIcon />{error}</Alert>}
        {loading && <Spinner />}

        {weather && location && !loading && (
          <>
            <Card bg="blue.500" color="white">
              <CardContent pt={8}>
                <Text fontSize="4xl" fontWeight="bold">{location.name}</Text>
                <Text fontSize="6xl" fontWeight="bold">{weather.temperature}°C</Text>
                <Text fontSize="xl">{weather.condition}</Text>
                <Text>Humidity: {weather.humidity}%</Text>
                <Text>Wind: {weather.windSpeed} km/h</Text>
              </CardContent>
            </Card>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Weather;
