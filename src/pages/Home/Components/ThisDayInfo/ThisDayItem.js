import React from 'react'
import IndicatorSvgSelector from '../../../../assets/indicators/IndicatorSvgSelector'
import s from './ThisDayInfo.module.scss'

const ThisDayItem = ({item}) => {
  const {icon_id, name, value} = item
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  )
}

export default ThisDayItem