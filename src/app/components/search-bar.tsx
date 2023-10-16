'use client'

import { useState } from 'react'

import { CloseIcon, LocationIcon, SearchIcon } from './icons'

interface Props {
  country: string
  city: string
  guests: string
}

export default function SearchBar ({ country, city, guests }: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleOpenSearch = () => {
    setIsSearchOpen(true)
  }

  const handleCloseSearch = () => {
    setIsSearchOpen(false)
  }

  return (
    <>
      <div
        onClick={handleOpenSearch}
        className='flex items-center h-[55px] w-[298px] my-[38px] mx-auto rounded-[16px] shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] font-mulish'
      >
        <div className='py-5 px-4 flex-grow'>
          <span className='text-[#333] text-sm font-normal'>
            {city?.length > 0 ? `${city}, ${country}` : country}
          </span>
        </div>
        <div className='h-[55px] w-[1px] bg-[#F2F2F2]' />
        <div className='py-5 px-4'>
          <span
            style={{ color: guests !== '0' ? '#333' : '#BDBDBD' }}
            className='text-sm font-normal'
          >
            {guests !== '0' ? `${guests} guests` : 'Add guests'}
          </span>
        </div>
        <div className='h-[55px] w-[1px] bg-[#F2F2F2]' />
        <div className='py-5 pl-[19px] pr-[17px]'>
          <SearchIcon />
        </div>
      </div>

      <div
        style={isSearchOpen ? { opacity: '1', zIndex: 99 } : { opacity: '0', zIndex: -1 }}
        className='fixed top-0 left-0 w-full h-[632px] bg-white p-3'
      >
        <div className='flex justify-between'>
          <span className='text-[#333] font-mulish text-xs font-bold leading-[normal]'>
            Edit your search
          </span>
          <div onClick={handleCloseSearch}>
            <CloseIcon />
          </div>
        </div>

        <div className='mt-3 rounded-[16px] shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]'>
          <div className='flex flex-col  py-3 px-6'>
            <span className='text-[#333] font-mulish text-[9px] font-extrabold leading-[normal] uppercase'>
              Location
            </span>
            <span className='text-[#333] text-sm leading-[normal] font-normal'>
              {city?.length > 0 ? `${city}, ${country}` : country}
            </span>
          </div>

          <div className='bg-[#F2F2F2] w-full h-[1px]'></div>

          <div className='flex flex-col py-3 px-6'>
            <span className='text-[#333] font-mulish text-[9px] font-extrabold leading-[normal] uppercase'>
              Guests
            </span>
            <span
              style={{ color: guests !== '0' ? '#333' : '#BDBDBD' }}
              className='text-sm font-normal'
            >
              {guests !== '0' ? `${guests} guests` : 'Add guests'}
            </span>
          </div>
        </div>

        <div className='p-7'>
          <div className='flex items-center mb-9'>
            <LocationIcon />
            <span className='ml-[10px] text-[#4F4F4F] text-sm leading-[normal] font-normal'>
              Helsinki, Finland
            </span>
          </div>
          <div className='flex items-center mb-9'>
            <LocationIcon />
            <span className='ml-[10px] text-[#4F4F4F] text-sm leading-[normal] font-normal'>
              Turku, Finland
            </span>
          </div>
          <div className='flex items-center mb-9'>
            <LocationIcon />
            <span className='ml-[10px] text-[#4F4F4F] text-sm leading-[normal] font-normal'>
              Oulu, Finland
            </span>
          </div>
          <div className='flex items-center mb-9'>
            <LocationIcon />
            <span className='ml-[10px] text-[#4F4F4F] text-sm leading-[normal] font-normal'>
              Vaasa, Finland
            </span>
          </div>
        </div>

        <div className='w-full bg-white absolute left-0 bottom-6'>
          <div className='flex mx-auto items-center justify-center bg-[#EB5757] w-[126px] h-12 rounded-2xl'>
            <SearchIcon fill='#F2F2F2' />
            <span className='ml-[10px] text-[#F2F2F2] font-mulish text-sm font-bold leading-[normal]'>
              Search
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
