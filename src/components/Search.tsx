import React, { ChangeEvent } from 'react'
import { optionType } from '../types'
type propTypes = {
  search: string
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void
  options: []
  onSubmit: () => void
  setOptionsData: (option: optionType) => void
}
const Search = ({
  search,
  searchHandler,
  options,
  onSubmit,
  setOptionsData,
}: propTypes) => {
  return (
   
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin ">
          Weather <span className="font-black ">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather of and select an
          option from dropdown
        </p>
        <div className="flex mt-10 md:mt-4 relative">
          <input
            type="text"
            onChange={searchHandler}
            value={search}
            className="px-2 py-1 rounded-1-md border-2 border-white"
          />
          <ul className="bg-white absolute top-9 rounded-b-md ml-1 border-white ">
            {options.map((option: optionType) => {
              return (
                <li className="" key={Math.random()}>
                  <button
                    onClick={() => setOptionsData(option)}
                    className="text-left text-lg w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  >
                    {option.name}
                  </button>
                </li>
              )
            })}
          </ul>
          <button
            className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </section>
  )
}

export default Search
