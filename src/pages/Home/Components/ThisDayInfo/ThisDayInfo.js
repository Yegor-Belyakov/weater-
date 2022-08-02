import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/cloud.png'
import ThisDayItem from './ThisDayItem'

const ThisDayInfo = ({weather}) => {
  const items = [
    {
    icon_id: 'temp',
    name: 'Температура',
    value: `${Math.round(weather.main.temp)}° ощущается как ${Math.round(weather.main.temp - 3)}° `
  },
  {
    icon_id: 'pressure',
    name: 'Давление',
    value: '765 мм ртутного столба - нормальное'
  },
  {
    icon_id: 'precipitation',
    name: 'Осадки',
    value: 'Без осадков'
  },
  {
    icon_id: 'wind',
    name: 'Ветер',
    value: '3 м/с юго-запад - легкий ветер'
  },
]
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {
        items.map((item) => 
        <ThisDayItem key={item.icon_id} item={item}/>
      )
    }
      </div>
      <img className={s.cloud__img} src={cloud} alt='Облако'/>
    </div>
  )
}

export default ThisDayInfo