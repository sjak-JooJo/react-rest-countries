import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountreis] = useState([]);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountreis(data))
    } , [])

    return (
        <div>
            <h1>Hello From Countreis: {countries.length}</h1>
            {
                countries.map(country => <Country 
                    name={country.name.common} 
                    population={country.population}
                    area={country.area}></Country>)
            }
        </div>
    );
};

export default Countries;