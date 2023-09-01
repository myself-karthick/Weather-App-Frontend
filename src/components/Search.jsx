import { useState } from 'react'
import search from '../assets/icons/search.png';

const Search = ({ cityName, UpdateCityName }) => {
    const [currCity, setCurrCity] = useState(cityName)

    const handleChange = () => {
        UpdateCityName(currCity);
    }

  return (
    <div className='search'>
        <input className='search__input' type='text' placeholder='Enter a city name' value={currCity} onChange={(e) => setCurrCity(e.target.value)}/>
        <button className='search__btn' onClick={handleChange}><img src={search} width={25} height={25} alt='search' /></button>
    </div>
  )
}

export default Search