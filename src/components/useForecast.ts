import React from 'react'
import { useState, ChangeEvent, useEffect } from 'react'
import { forecastType, optionType } from '../types'

const useForecast = () => {
  const [search, setSearch] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [city, setCity] = useState<optionType | null>()
  const [forecast, setForecast] = useState<forecastType | null>(null)
  const getOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setOptions(data)
      })
      .catch((err) => console.log(err + 'err'))
  }
  const getForecast = (option: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${option.lat}&lon=${option.lon}&units=metric&exclude={part}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        }
        setForecast(forecastData)
      })
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    if (e.target.value === '') return
    getOptions(e.target.value)
  }
  const setOptionsData = (option: optionType) => {
    setCity(option)
  }
  const onSubmit = () => {
    if (!city) return
    getForecast(city)
  }
  useEffect(() => {
    if (city) {
      setSearch(city.name)

      setOptions([])
    }
  }, [city])
  return {
    search,
    options,
    forecast,
    onSubmit,
    getOptions,
    searchHandler,
    setOptionsData,
  }
}

export default useForecast
