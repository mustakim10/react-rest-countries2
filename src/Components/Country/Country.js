import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area,region ,population,name , flags} = props.country ;
    return (
        <div className='country bg-warning-subtle'>
            <h2>Country Name :{name.common} </h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p><small>Area : {area}</small></p>
        </div>
    );
};

export default Country;