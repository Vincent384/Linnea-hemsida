'use client'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { storage } from '@/firebase.config'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'

const PublicLayout = ({ children }) => {
  const [landingpageImages, setLandingpageImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      try {
        const imageRef = ref(storage, 'Logo')
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
    <div>
      <div className='flex justify-between items-center max-sm:sticky top-0 left-0 z-10
       bg-gradient-to-r from-emerald-500 to-slate-500 border'>
        <div className="max-sm:w-[100px] w-[150px] aspect-video m-2">
          <Link href={'/'}>
            {landingpageImages[0] && (
              <Image
                className="w-full object-contain"
                src={landingpageImages[0]}
                width={239}
                height={146}
                quality={100} 
                alt="Landingpage Image"
                priority
              />
            )}
          </Link>
        </div>
        <Navbar />
      </div>
      <div className='bg-orange-50'>
        {children}
      </div>
    </div>
  )
}

export default PublicLayout
