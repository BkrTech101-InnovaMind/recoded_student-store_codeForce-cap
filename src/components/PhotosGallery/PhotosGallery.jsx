import Image from "next/image"
import React, { useEffect, useState } from "react"
import { SectionWrapper } from "@/hoc"

function PhotosGallery({ largimage, imgone, imgtwo, imgthree }) {
  console.log("ff", largimage)
  const [file, setFile] = useState(null)
  const onChangeImageHandler = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
      e.target.value = ""
    }
  }

  useEffect(() => {
    console.log(file)
  }, [file])

  function dropLargeImage() {
    return (
      <div className='w-full'>
        <div className='border border-solid bg-gray-300 border-black rounded relative '>
          <input
            type='file'
            className='cursor-pointer relative opacity-0 w-full p-14 lg:p-24 md:p-24'
            onChange={onChangeImageHandler}
          ></input>
          <div className='w-12 absolute top-10 md:top-20 lg:top-20 right-0 left-0 m-auto'>
            <Image
              src='gallery.svg'
              width={100}
              height={100}
              alt='drop large image'
            />
          </div>
        </div>
      </div>
    )
  }

  function dropImage() {
    return (
      <div className='w-full'>
        <div className='border border-solid bg-gray-300 border-black rounded relative '>
          <input
            type='file'
            className='cursor-pointer relative opacity-0 w-full p-8 lg:p-10 md:p-10'
            onChange={onChangeImageHandler}
          ></input>
          <div className='w-8 absolute top-8 right-0 left-0 m-auto'>
            <Image
              src='gallery.svg'
              width={100}
              height={100}
              alt='drop image'
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col lg:flex-col md:flex-row w-full justify-center'>
      <div className='lg:m-0 my-auto'>
        {largimage ? (
          <Image
            className='h-full w-full lg:w-full lg:h-full md:w-96 md:h-60 object-cover'
            src={largimage}
            width={500}
            height={500}
            alt='Photo-one'
          />
        ) : (
          dropLargeImage()
        )}
      </div>
      <div className='flex lg:w-full md:w-1/2 lg:flex-nowrap md:flex-wrap'>
        <div className='w-full p-1'>
          {imgone ? (
            <Image
              className='block h-full w-full rounded-lg object-cover object-center'
              src='photo-three.svg'
              width={500}
              height={500}
              alt='Photo-three'
            />
          ) : (
            dropImage()
          )}
        </div>
        <div className='lg:w-full md:w-1/2 w-full p-1'>
          {imgtwo ? (
            <Image
              className='block h-full w-full rounded-lg object-cover object-center'
              src='photo-two.svg'
              width={100}
              height={100}
              alt='photo-two'
            />
          ) : (
            dropImage()
          )}
        </div>
        <div className='lg:w-full md:w-1/2 w-full p-1'>
          {imgthree ? (
            <Image
              className='block h-full w-full rounded-lg object-cover object-center'
              src='photo-four.svg'
              width={100}
              height={100}
              alt='photo-four'
            />
          ) : (
            dropImage()
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(PhotosGallery)
