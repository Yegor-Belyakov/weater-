import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunk/fetchCurrentWeather'
import Days from './Components/Days/Days'
import ThisDay from './Components/ThisDay/ThisDay'
import ThisDayInfo from './Components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss'

const Home = () => {

  const dispatch = useCustomDispatch()
  
  const {weather} = useCustomSelector(state => state.CurrentWeatherSliceReducer)
  
  useEffect(() => {
    dispatch(fetchCurrentWeather([ 55.7522, 37.6156]))
  }, [])
  
  return (
    <div className={s.home}> 
    <div className={s.wrapper}>
    <ThisDay weather={weather}/> 
    <ThisDayInfo  weather={weather}/>
    </div>
    <Days weather={weather}/>
    </div>
  )
}

export default Home