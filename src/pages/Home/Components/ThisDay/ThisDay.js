import React from 'react'
import GlobalSvgSelector from '../../../../assets/images/icons/GlobalSvgSelector'
import s from './ThisDay.module.scss'

const ThisDay = ({weather}) => {
  return (
    <div className={s.this__day} >
      <div className={s.top__block} >
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp} > {Math.round(weather.main.temp)}°</div>
          <div className={s.this__day_name} > Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </div>
      <div className={s.bottom__block} >
        <div className={s.this__time} >Время: <span>21:00</span> </div>
        <div className={s.this__city} >Город: <span>Санкт-Петербург</span> </div>
      </div>
    </div>
  )
}

export default ThisDay