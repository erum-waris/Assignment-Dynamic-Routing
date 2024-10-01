
import React from 'react'
import List from './List'

function Navbar() {
  return (
    <div className='bg-stone-400 text-white text-xl flex justify-center items-center gap-8 p-2 mt-0 mb-8 h-14'>
      <List href="/" listname='Home' />
        <List href="/country" listname='Select Country' />
    </div>
  )
}

export default Navbar



