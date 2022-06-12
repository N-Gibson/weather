export const getForecast = async () => {
  const url = `api.openweathermap.org/data/2.5/forecast?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LON}&appid=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('There was a problem getting the weather forecast.')
  }

  const data = response.json()
  return data
}
