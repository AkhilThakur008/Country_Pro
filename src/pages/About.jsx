import React from 'react';
import { countries } from '../../data';
import './About.css';


export const About = () => {
  return (
   <>
   <div className="about-header">
    <h1>Here are the Interesting Facts</h1>
    <h1>We're pround of</h1>
   </div>
   <div className="country-list">
      {countries.map((country) => (
        <div key={country.id} className="country-card">
          <h2>{country.name}</h2>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Population:</strong> {country.population}</p>
          <ul>
            {country.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
   </>
  );
};
