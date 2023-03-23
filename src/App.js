import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
       <Countries></Countries>
       <Footer></Footer>
    </div>
  );
}

function LoadCountries(){
  const [countries,setCountries]=useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div>
      <h1>Visiting Every Country in The World</h1>
      <h3>Total Countries: {countries.length}</h3>
      {
        countries.map(country=> <Country info={country}></Country> )
      }
    </div>
  )
}

function Country(country){
  return (
    <div>
       <h2>Name: {country.info.name.common} </h2>
       <h4>Population: {country.info.population} </h4>
    </div>
  )
}

export default App;
