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
            input: 100,
            expected: (value: number) => (value * 9) / 5 + 32,
        },
        {
            category: 'Meters to Feet',
            endPoint: '/length/meters-to-feet.htm',
            input: 10,
            expected: (value: number) => value * 3.2808,
        },
        {
            category: 'Ounces to Grams',
            endPoint: '/weight/ounces-to-grams.htm',
            input: 5,
            expected: (value: number) => value * 28.35,
        },
    ],
    defaultZipCode: '20852',
};
