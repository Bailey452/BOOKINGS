'use client'
import React from 'react'
import { getLanguages } from '@/services/languageService'
import { IoIosArrowDown } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { useState, useEffect } from 'react';

const Languages = () => {

  const [result, setResult] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const handleLanguages = async () => {
    setLoading(true)
    const data = await getLanguages()
    setResult(data)
  }

  useEffect(() => {
    const loadDataOnPageLoad = async () => {
      const data = await getLanguages()
      setResult(data)
    }

    loadDataOnPageLoad();
  }, [])
  console.log(result);


  return (
    <div className='lang'>

      <div className='langText'>
        <IoLanguage color='green' className='mr-2' />
        <h1> Language Guide</h1>
      </div>

      <div className='Langtext'>
        <h1 onClick={handleLanguages}>Choose Language</h1>

        <select className='input'>
          {
            result?.data?.data.map((eachLanguage: any) => (
              <option value="Text">
                {eachLanguage.name}
                {eachLanguage.code}
                {eachLanguage.countryFlag}
              </option>
            ))
          }
        </select>
      </div>

      <div className='phrase'>
        <h1 className='praseH'>Common Travel Phrases</h1>

        <div>
          <p>Hello: <span>Hola (Spanish), Bonjour (French)</span></p>
          <p>Thank you: <span>Gracias (Spanish), Merci (French)</span></p>
          <p>Excuse me: <span>Perdón (Spanish), Excusez-moi (French)</span></p>
          <p>Where is...?: <span>¿Dónde está...? (Spanish), Où est...? (French)</span></p>
          <p>How much?: <span>¿Cuánto cuesta? (Spanish), Combien? (French)</span></p>
        </div>
      </div>


    </div>
  )
}

export default Languages







// what short circuiting is and what it's used for