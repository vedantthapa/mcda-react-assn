export const WEATHER_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cb1198350401966f86aabcb271c86fe2";

export function getCelsiusTemp(tempKelvin) {
  return Math.round(tempKelvin - 273.15);
}

export function convert(unit, temp) {
  return (
    Math.round((unit === "F" ? ((temp - 32) * 5) / 9 : temp * 1.8 + 32) * 100) /
    100
  );
}
