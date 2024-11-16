import { Utils } from '../infra/Utils'

export const config = {
    urls: {
        metricPage:'https://www.metric-conversions.org',
        weatherPage: (zipCode: string) => `https://weather.com/weather/today/l/${zipCode}`,
        apiBase: 'https://api.weatherapi.com',
    },
    dataConversions: [
        {
            category: 'Celsius to Fahrenheit',
            endPoint: '/temperature/celsius-to-fahrenheit.htm',
            input: Utils.randomIntFromInterval(-273.15, 1000), 
            expected: (value: number) => (value * 9) / 5 + 32,
        },
        {
            category: 'Meters to Feet',
            endPoint: '/length/meters-to-feet.htm',
            input: Utils.randomIntFromInterval(1, 1000),
            expected: (value: number) => value * 3.28084,
        },
        {
            category: 'Ounces to Grams',
            endPoint: '/weight/ounces-to-grams.htm',
            input:Utils.randomIntFromInterval(1, 100),
            expected: (value: number) => value * 28.34949254,
        },
    ],
    defaultZipCode: '20852',
};
