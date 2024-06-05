'use client'

import { FormEvent, useState } from 'react'
import {
  countryForm,
  countryFormButton,
  countryFormInput,
  countryFormResults,
  countryFormResultsButton,
  countryFormResultsFlag,
  countryFormWrapper,
} from './style.css'

interface Country {
  country: string
  flag: string
}

const CountryForm = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const formSearchCountry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const searchValue = formData.get('country')?.toString().toLowerCase() || ''

    if (!searchValue) return setCountries([])

    try {
      const response = await fetch('/api/countries')

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data: Country[] = await response.json()
      const filteredData = data.filter(country => country.country.toLowerCase().includes(searchValue))

      setCountries(filteredData)

      console.log(countries)
    } catch (error) {
      console.error('Error fetching countries:', error)
    }
  }

  const setCountry = (country: Country) => {
    return () => setInputValue(country.country)
  }

  return (
    <div className={countryFormWrapper}>
      <form onSubmit={formSearchCountry} onKeyUp={formSearchCountry} className={countryForm}>
        <input
          type="text"
          placeholder="Country"
          name="country"
          className={countryFormInput}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        <button type="submit" className={countryFormButton}>
          Submit
        </button>
      </form>

      <ul className={countryFormResults}>
        {countries.map((country, index) => (
          <li key={index}>
            <button onClick={setCountry(country)} className={countryFormResultsButton}>
              <div dangerouslySetInnerHTML={{ __html: country.flag }} className={countryFormResultsFlag} />
              <span>{country.country}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CountryForm
