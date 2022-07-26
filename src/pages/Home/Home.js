import React from 'react'
import Days from './Components/Days/Days'
import ThisDay from './Components/ThisDay/ThisDay'
import ThisDayInfo from './Components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss'

const Home = () => {
  return (
    <div className={s.home}> 
    <div className={s.wrapper}>
    <ThisDay /> 
    <ThisDayInfo />
    </div>
    <Days />
    </div>
  )
}

export default Home