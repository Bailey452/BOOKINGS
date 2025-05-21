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
            result?.data?.data.map((eachLanguage: any, index: any) => (
              <option key={index}>
                {eachLanguage.name}
                {eachLanguage.code}
                {eachLanguage.countryFlag}
              </option>
            ))
          }
        </select>
      </div>

      <div className='phrase'>
        <h1 className='phraseH'>Common Travel Phrases</h1>

        <div className='phraseP'>
          <p><span className='span'>Hello:</span> Hola (Spanish), Bonjour (French)</p>
          <p><span className='span'>Thank you:</span> Gracias (Spanish), Merci (French)</p>
          <p><span className='span'>Excuse me:</span> Perdón (Spanish), Excusez-moi (French)</p>
          <p><span className='span'>Where is...?:</span> ¿Dónde está...? (Spanish), Où est...? (French)</p>
          <p><span className='span'>How much?:</span> ¿Cuánto cuesta? (Spanish), Combien? (French)</p>
        </div>
      </div>


    </div>
  )
}

export default Languages







// what short circuiting is and what it's used for