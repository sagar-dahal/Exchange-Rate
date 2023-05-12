import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import './body.css';

const Body = () => {

    const [currencies, setCurrencies] = useState({});
    const [rates, setRates] = useState({});
    const API_KEY = "970e8edb43bb4aaaa37e759a67d81692";
    useEffect(()=>{
        const fetchcountries = async () =>{
            const {data} = await axios.get('https://api.currencyfreaks.com/v2.0/supported-currencies');
            setCurrencies(data.supportedCurrenciesMap);
            
        };
        const fetchRates = async () =>{
            const {data} = await axios.get(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`);
            setRates(data);
        }

        fetchcountries();
        fetchRates();
    }, []);
  return (
    <div className='body'>
        <div className='container'>
        {
            Object.keys(currencies).map((c) => (
                <Card country={currencies[c].currencyName} symbol={currencies[c].currencyCode} 
        img= {currencies[c].icon} 
        rate = {(+rates.rates[c]).toFixed(2)} key = {c} />
            ))
        }
        </div>
    </div>
  )
}

export default Body;
