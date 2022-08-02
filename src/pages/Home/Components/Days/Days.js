import React from 'react'
import Card from './Card'
import s from './Days.module.scss'
import Tabs from './Tabs'

const Days = ({weather}) => {
  const days = [
    {
    day: 'Сегодня',
    day_info: '28 авг',
    icon_id: 'sun',
    temp_day: `${Math.round(weather.main.temp)}°`,
    temp_night: `${Math.round(weather.main.temp - 7)}°`,
    info: 'Облачно',
  },
  {
    day: 'Завтра',
    day_info: '29 авг',
    icon_id: 'small_rain_sun',
    temp_day: `${Math.round(weather.main.temp + 1 )}°`,
    temp_night: `${Math.round(weather.main.temp - 6)}°`,
    info: 'Небольшой дождь и солнце',
  },
  {
    day: 'Ср',
    day_info: '30 авг',
    icon_id: 'small_rain',
    temp_day: `${Math.round(weather.main.temp + 2 )}°`,
    temp_night: `${Math.round(weather.main.temp - 4)}°`,
    info: 'Небольшой дождь',
  },
  {
    day: 'Чт',
    day_info: '28 авг',
    icon_id: 'mainly_cloudy',
    temp_day: `${Math.round(weather.main.temp + 3 )}°`,
    temp_night: `${Math.round(weather.main.temp - 7)}°`,
    info: 'Облачно',
  },
  {
    day: 'Пт',
    day_info: '28 авг',
    icon_id: 'rain',
    temp_day: `${Math.round(weather.main.temp + 1 )}°`,
    temp_night: `${Math.round(weather.main.temp - 6)}°`,
    info: 'Облачно',
  },
  {
    day: 'Сб',
    day_info: '28 авг',
    icon_id: 'sun',
    temp_day: `${Math.round(weather.main.temp + 4 )}°`,
    temp_night: `${Math.round(weather.main.temp - 3)}°`,
    info: 'Облачно',
  },
  {
    day: 'Вс',
    day_info: '28 авг',
    icon_id: 'sun',
    temp_day: `${Math.round(weather.main.temp + 3 )}°`,
    temp_night: `${Math.round(weather.main.temp - 5)}°`,
    info: 'Облачно',
  }
]
  return (
    <>
    <Tabs />
    <div className={s.days}>
      {days.map((day) => <Card day={day} key={day.day}/>)}
    </div>
    </>
  )
}

export default Days