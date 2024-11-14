
export class WeatherApiService {
    getCurrentTemperature = async (zipCode: string): Promise<number> => {
        const API_KEY = '7a7027a29c4f4c78836161935241411'
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${zipCode}&aqi=no`);
        const data = await response.json();
        return data.current.temp_f;
    }
}
