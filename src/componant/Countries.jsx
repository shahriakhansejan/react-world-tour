import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setvisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountries = country => {
        const newVistiedCountries = [...visitedCountries, country];
        setVisitedCountries(newVistiedCountries);
    }

    const handleVisitedFlag = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setvisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h2>Countries :  {countries.length}</h2>
            <div>
            <h2>Visited Countries : {visitedCountries.length}</h2>
            <h2>Visited Flag : {visitedFlags.length}</h2>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }

            </ul>
            </div>
            <div className="flag-container">
                
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className="contries-container">
            {
                countries.map(country=> <Country key={country.cca3} 
                    handleVisitedFlag={handleVisitedFlag}
                    handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
            }
            </div>
        </div>
    );
};


export default Countries;