interface WeatherDataPerDay {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
}

interface IAccordion {
  weatherDataPerDay: WeatherDataPerDay;
}
