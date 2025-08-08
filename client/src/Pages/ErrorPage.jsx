import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage({message}) {
  return (
    <div className='px-2 sm:px-6 md:px-20'>
      <h1 className='text-2xl mb-5 font-raleway font-bold'>{message}</h1>
      <Link 
        to="/category/all" 
        className="bg-black/30 text-white p-2 rounded transition hover:bg-black/60">Go back</Link>
    </div>
  )
}

export default ErrorPage
