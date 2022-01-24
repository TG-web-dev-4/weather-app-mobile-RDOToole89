export const buildCurrentWeatherUrl = (city, apiKey, unit) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
};

const unixTime = (new Date().getTime() / 1000).toString();

export const buildOneCallForecastUrl = (
  latitude,
  longitude,
  excludeString,
  unit = 'metric',
  apiKey
) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludeString}&units=${unit}&appid=${apiKey}`;
};
