import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CurrentWeatherSliceReducer from './CurrentWeatherSlice'

const rootReducer = combineReducers({
  CurrentWeatherSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware({
    serializableCheck: false,
  })
  
})
