'use client'
import React from 'react'
import { getLanguages } from '@/services/languageService'

const Languages = () => {
    const handleLanguages = () => {
        getLanguages()
    }
  return (
    <div>
      <button onClick={handleLanguages}>
        {/* Get Languages */}
        </button>
    </div>
  )
}

export default Languages