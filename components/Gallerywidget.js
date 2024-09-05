"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Gallerywidget = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; 

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : Math.max(images.length - 3, 0)));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 3 ? prevIndex + 1 : 0));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className='h-[316px] max-w-[720px] bg-[#363C43] text-[#969696] p-5 rounded-xl relative'>
      <div className='flex flex-col gap-28 absolute left-3 top-3'>
        <Image src="/photos//help.svg" alt="help" height={24} width={24} />
        <Image src="/photos//rect.svg" alt="rect" height={24} width={24} />
      </div>
      <div className='flex h-[49px] w-full items-center justify-between px-6'>
        <span className='text-white font-semibold bg-black px-6 py-4 rounded-2xl'>Gallery</span>
        <div className='flex items-center gap-4'>
          <label htmlFor="imageUpload" className='galleryAddBtn px-6 py-4 rounded-3xl text-white font-semibold bg-[#363C43] cursor-pointer'>
            + ADD IMAGE
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <Image
            src="/photos/leftArrow.png"
            alt="left arrow"
            height={79}
            width={79}
            onClick={handlePrevClick}
            className='cursor-pointer'
          />
          <Image
            src="/photos/rightArrow.png"
            alt="right arrow"
            height={79}
            width={79}
            onClick={handleNextClick}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex justify-center items-center overflow-x-auto mt-8 gap-4'>
        {visibleImages.map((image, index) => (
          <div key={index} className='w-32 h-32 overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={`Image ${index}`}
              width={128}
              height={128}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallerywidget
