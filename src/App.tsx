import { useState, ChangeEvent, useEffect } from 'react'
import Forecast from './components/Forecast'
import Search from './components/Search'
import useForecast from './components/useForecast'
import { optionType } from './types'

const App = (): JSX.Element => {
  const {
    search,
    options,
    forecast,
    onSubmit,
    getOptions,
    searchHandler,
    setOptionsData,
  } = useForecast()

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          search={search}
          searchHandler={searchHandler}
          options={options}
          onSubmit={onSubmit}
          setOptionsData={setOptionsData}
        />
      )}
    </main>
  )
}

export default App
