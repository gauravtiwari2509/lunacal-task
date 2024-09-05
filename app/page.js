import Gallerywidget from '@/components/Gallerywidget'
import TabWidget from '@/components/Tabwidget'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex p-20 justify-center items-center gap-6 '>
        <div className='w-1/2 h-full'></div>
        <div className='w-1/2 h-full flex flex-col gap-6'>
            <TabWidget/>
            <Gallerywidget/>
        </div>
    </div>
  )
}

export default page