'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Navlinks } from './Nav-links'

export const Navbar = () => {




  return (
    <div className='flex justify-end mr-10'>
        <nav>
            <Navlinks/>
        </nav>
        </div>
  )
}
