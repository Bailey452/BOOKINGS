'use client'
import React from 'react'
import { getCurrency } from '@/services/currencyService'
import { getCurrent } from '@/services/currencyService'
import { IoLanguage } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { FcCurrencyExchange } from "react-icons/fc";

const Currency = () => {
  const [result, setResult] = useState<any>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadDataOnPageLoad = async () => {
      const Currency = await getCurrency()
      setResult(Currency)
    }

    loadDataOnPageLoad();
  }, [])
  console.log(result);

  useEffect(() => {
    const loadDataOnPageLoad = async () => {
      const Current = await getCurrent()
      setResult(Current)
    }

    loadDataOnPageLoad();
  }, [])
  console.log(result);


  return (
    <div className='lang'>

      <div className='langText'>
        <FcCurrencyExchange />
        <h1> Currency</h1>
      </div>

      <div className='Langtext text'>

        <div>

          <h1>{result?.data?.data?.base_currency}</h1>

          <select className='input inp'>
            {
              result?.data?.data?.exchange_rates?.map((eachCurrency: any, index: any) => (
                <option Key={index}>
                  {eachCurrency.currency}, {eachCurrency.exchange_rate_buy}
                </option>
              ))
            }
          </select>
        </div>

        <div>

          <h1>{result?.data?.data?.base_currency}</h1>

          <select className='input inp'>
            {
              result?.data?.data?.exchange_rates?.map((eachCurrency: any) => (
                <option value="text">
                  {eachCurrency.name}, {eachCurrency.code}, {eachCurrency.encodedsymbol}, 
                  {eachCurrency.symbol}
                </option>
              ))
            }
          </select>

        </div>


      </div>


    </div>
  )
}

export default Currency


// what short circuiting is and what it's used for