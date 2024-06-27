'use client'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { storage } from '@/firebase.config'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [landingpageImages, setLandingpageImages] = useState([])

  const genres = ['Pop', 'Rock', 'Jazz', 'Visa', 'Musikal']

  useEffect(() => {
    const getImages = async () => {
      try {
        const imageRef = ref(storage, 'HemmaBilder')
        const result = await listAll(imageRef)
        const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef))
        const downloadUrls = await Promise.all(urlPromises)
        setLandingpageImages(downloadUrls)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }
    getImages()
  }, []) 
  
  return (
    <div className='max-md:bg-orange-50 min-h-screen'>
      <header className='relative md:grid grid-cols-2'>
        {
          landingpageImages ?
          <div className='bg-gradient-to-t from-black to-transparent md:bg-none max-md:m-0 md:p-0 max-md:block xl: grid grid-cols-1 m-5 p-2 items-center '>
            <Image 
              src={landingpageImages[0]}
              width={640}
              height={360}
              alt='mikrofon'
              className='opacity-30 sm:w-full object-cover md:opacity-100'
            /> <div className='max-md:hidden w-full aspect-video border rounded-xl p-2 bg-slate-500 mt-3'>
                  <Image 
                    src={landingpageImages[1]}
                    width={640}
                    height={360}
                    alt='scen'
                    className='w-full h-full'
                  /> 
            </div>
          </div> : ''
        }
        <div className='bg-orange-100 border rounded-lg max-sm: absolute top-40 right-0 left-0 p-2 m-3 md:static '>
          <div className='grid'>
            <h1 className='text-center mt-5 text-3xl text-blue-900'>Sånglektioner</h1>
          </div>
          <div className='flex justify-center gap-4 items-center'>
            <h3 className='text-xl'>Täby</h3>
            <h2 className='text-center text-xl my-3'>Linnea Olsson</h2>
          </div>
          <section className='bg-gradient-to-r from-emerald-500 to-slate-500 w-[350px] mt-5 rounded-full  m-auto flex justify-center gap-2 text-center'>
            {
              
              genres.map((item, index) => (
                <span key={index} className='p-2  text-white rounded-full'>{item}</span>
              ))
            }
          </section>
          <div className='lg:grid grid-cols-2'>
            <p className='m-5 text-slate-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, debitis! Soluta commodi explicabo corporis natus! Ipsum cum iusto sint porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, debitis! Soluta commodi explicabo corporis natus! Ipsum cum iusto sint porro!
            </p>
            <p className='m-5 text-slate-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, debitis! Soluta commodi explicabo corporis natus! Ipsum cum iusto sint porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, debitis! Soluta commodi explicabo corporis natus! Ipsum cum iusto sint porro!
            </p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
