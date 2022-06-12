export const getForecast = async () => {
  await fetch(
    `api.openweathermap.org/data/2.5/forecast?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LON}&appid=${process.env.REACT_APP_API_KEY}`,
  )
}
