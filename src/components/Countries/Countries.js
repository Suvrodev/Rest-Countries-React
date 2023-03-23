import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])



    return (
        <div className='countries_container'>
            <h2>Countries: {countries.length} </h2>
            <div className="container">
            {
                countries.map(country_=> <Country
                    country={country_}
                    key={country_.cca3}
                     >
                    </Country> )
            }
            </div>
           
        </div>
    );
};

export default Countries;