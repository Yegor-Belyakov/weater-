
import api from "../axios"


export class WeatherService {
  static getCurrentWeather ([lat, lon]) {
    return api.get(`/weather?lat=${lat}&lon=${lon}`)
  }
 }


 // apikey 93f2871033e2c9eff67e65ae107bd299