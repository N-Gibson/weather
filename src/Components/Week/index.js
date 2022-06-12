import React from 'react'

import { getForecast } from '../../apiCalls'

const weatherForecast = async () => {
  try {
    const data = await getForecast()
    console.log('data fetch', data)
  } catch (error) {
    console.error(error)
  }
}

function Week() {
  return (
    <div className="">
      <button onClick={weatherForecast} />
    </div>
  )
}

export { Week }
