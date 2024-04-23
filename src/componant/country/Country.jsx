import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {

    const {name, flags, population, capital, area, cca3} = country;
    const [visited, setVisited]=useState(false);
    const handleVisited =()=>{
        setVisited(!visited);
    }

   

    return (
        <div className={visited? 'visited': 'country'}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h5>Code : {cca3}</h5>
            <h4>Capital : {capital}</h4>
            <h4>Population : {population}</h4>
            <h4>Area : {area}</h4>
            <button onClick={handleVisited}>{cca3} {visited? 'visited':'going' }</button> <br /> <br />
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Flag</button>
        </div>
    );
};


export default Country;