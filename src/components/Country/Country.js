import React from 'react';
import './Country.css'



const country = (props) => {
   // console.log(props.country.area)
    const {name,population,area,region,flags}=props.country;
    return (
        <div className='country'>
            <h2 className='Title'>Country Name: {name.common} </h2>
            <img className='img' src={flags.png} alt="" />
            <p>Populations : {population} </p>
            <p><small>Region: {region} </small></p>
            <p><small>Area: {area} </small></p>
            
        </div>
    );
};

export default country;