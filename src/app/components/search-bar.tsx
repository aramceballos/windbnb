'use client'

import { useState, type MouseEvent } from 'react'

import {
  CloseIcon,
  LocationIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon
} from './icons'
import { useRouter } from 'next/navigation'

interface Props {
  country: string
  city: string
  guests: string
}

const locations = [
  {
    id: 1,
    city: 'Helsinki',
    country: 'Finland'
  },
  {
    id: 2,
    city: 'Turku',
    country: 'Finland'
  },
  {
    id: 3,
    city: 'Oulu',
    country: 'Finland'
  },
  {
    id: 4,
    city: 'Vaasa',
    country: 'Finland'
  }
]

export default function SearchBar ({ country, city, guests }: Props) {
  const router = useRouter()

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLocationsMenuOpen, setIsLocationsMenuOpen] = useState(false)
  const [isGuestsMenuOpen, setIsGuestsMenuOpen] = useState(false)
  const [countryParam, setCountryParam] = useState(country)
  const [cityParam, setCityParam] = useState(city)
  const [guestsParam, setGuestsParam] = useState(parseInt(guests))

  const handleOpenSearch = () => {
    setIsSearchOpen(true)
  }

  const handleCloseSearch = () => {
    setIsSearchOpen(false)
  }

  const handleClickModal = (ev: MouseEvent<HTMLDivElement>) => {
    const targetElement = ev.target as HTMLDivElement
    const targetId = targetElement.id

    if (targetId === 'search-modal-container') {
      handleCloseSearch()
    }
  }

  const handleChangeLocation = (country: string, city: string) => {
    setCountryParam(country)
    setCityParam(city)
  }

  const handleToggleLocationsMenu = () => {
    setIsGuestsMenuOpen(false)
    setIsLocationsMenuOpen(!isLocationsMenuOpen)
  }

  const handleToggleGuestsMenu = () => {
    setIsLocationsMenuOpen(false)
    setIsGuestsMenuOpen(!isGuestsMenuOpen)
  }

  const handleCloseGuestsMenu = () => {
    setIsGuestsMenuOpen(false)
  }

  const handleAddGuest = () => {
    setGuestsParam(guestsParam + 1)
  }

  const handleRemoveGuest = () => {
    if (guestsParam > 0) {
      setGuestsParam(guestsParam - 1)
    }
  }

  const handleSearch = () => {
    if (guestsParam > 0) {
      router.push(
        `?country=${countryParam}&city=${cityParam}&guests=${guestsParam}`
      )
    } else {
      router.push(`?country=${countryParam}&city=${cityParam}`)
    }
  }

  return (
    <>
      <div
        onClick={handleOpenSearch}
        className='flex items-center h-[55px] w-[298px] my-[38px] lg:my-0 mx-auto lg:mx-0 rounded-[16px] shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] font-mulish cursor-pointer'
      >
        <div className='py-5 px-4 flex-grow'>
          <span className='text-[#333] text-sm font-normal'>
            {cityParam?.length > 0
              ? `${cityParam}, ${countryParam}`
              : countryParam}
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
        id='search-modal-container'
        onClick={handleClickModal}
        style={
          isSearchOpen
            ? { opacity: '1', zIndex: 99 }
            : { opacity: '0', zIndex: -1 }
        }
        className='fixed top-0 left-0 w-full h-full bg-[#4F4F4F66]'
      >
        <div className='fixed top-0 left-0 w-full h-[632px] bg-white p-3 lg:pb-[54px] lg:px-24'>
          <div className='flex justify-between lg:hidden'>
            <span className='text-[#333] font-mulish text-xs font-bold leading-[normal]'>
              Edit your search
            </span>
            <div className='cursor-pointer' onClick={handleCloseSearch}>
              <CloseIcon />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row mt-3 rounded-[16px] shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]'>
            <div className='flex flex-col flex-grow relative lg:border-r-[1px] border-[#F2F2F2]'>
              <div
                style={
                  isLocationsMenuOpen && window.innerWidth >= 1024
                    ? {
                        border: '1px solid black'
                      }
                    : {
                        border: 'none'
                      }
                }
                onClick={handleToggleLocationsMenu}
                className='flex flex-col flex-grow py-3 px-6 border-b-[1px] lg:border-b-[0] lg:border-r-[1px] border-[#F2F2F2] cursor-pointer rounded-2xl'
              >
                <span className='text-[#333] font-mulish text-[9px] font-extrabold leading-[normal] uppercase'>
                  Location
                </span>
                <span className='text-[#333] text-sm leading-[normal] font-normal'>
                  {cityParam?.length > 0
                    ? `${cityParam}, ${countryParam}`
                    : countryParam}
                </span>
              </div>

              <div
                style={
                  isLocationsMenuOpen
                    ? { opacity: '1', zIndex: 99 }
                    : { opacity: '0', zIndex: -1 }
                }
                className='bg-white px-6 py-3 absolute top-[130px] lg:top-[70px] left-0 right-0'
              >
                {locations.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => {
                      handleChangeLocation(location.country, location.city)
                    }}
                    className='flex items-center mb-9 cursor-pointer'
                  >
                    <LocationIcon />
                    <span className='ml-[10px] text-[#4F4F4F] text-sm leading-[normal] font-normal'>
                      {location.city}, {location.country}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col flex-grow relative lg:border-r-[1px] border-[#F2F2F2]'>
              <div
                style={
                  isGuestsMenuOpen && window.innerWidth >= 1024
                    ? {
                        border: '1px solid black'
                      }
                    : {
                        border: 'none'
                      }
                }
                className='flex flex-col relative cursor-pointer py-3 px-6 rounded-2xl'
                onClick={handleToggleGuestsMenu}
              >
                <span className='text-[#333] font-mulish text-[9px] font-extrabold leading-[normal] uppercase'>
                  Guests
                </span>
                <span
                  style={{ color: guestsParam > 0 ? '#333' : '#BDBDBD' }}
                  className='text-sm font-normal'
                >
                  {guestsParam > 0 ? `${guestsParam} guests` : 'Add guests'}
                </span>
              </div>

              <div
                style={
                  isGuestsMenuOpen
                    ? { opacity: '1', zIndex: 99 }
                    : { opacity: '0', zIndex: -1 }
                }
                className='bg-white px-6 py-3 absolute top-[70px] left-0 right-0'
              >
                <div className='flex flex-col'>
                  <div
                    onClick={handleCloseGuestsMenu}
                    className='flex flex-col cursor-pointer'
                  >
                    <span className='text-[#333] font-mulish text-sm font-normal leading-[normal]'>
                      Adults
                    </span>
                    <span className='text-[#BDBDBD] font-mulish text-sm font-normal leading-[normal]'>
                      Agues 13 or above
                    </span>
                  </div>
                  <div className='flex items-center my-3'>
                    <button
                      onClick={handleRemoveGuest}
                      className='border-solid border-[1px] border-[#828282] rounded-[4px] p-[3px]'
                    >
                      <MinusIcon />
                    </button>
                    <span className='text-[#333] font-mulish text-sm font-normal leading-[normal] mx-4'>
                      {guestsParam}
                    </span>
                    <button
                      onClick={handleAddGuest}
                      className='border-solid border-[1px] border-[#828282] rounded-[4px] p-[3px]'
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden lg:flex items-center flex-grow'>
              <button
                onClick={handleSearch}
                className='flex mx-auto items-center justify-center bg-[#EB5757] w-[126px] h-12 rounded-2xl'
              >
                <SearchIcon fill='#F2F2F2' />
                <span className='ml-[10px] text-[#F2F2F2] font-mulish text-sm font-bold leading-[normal]'>
                  Search
                </span>
              </button>
            </div>
          </div>

          <div className='mt-3 relative lg:flex'>
            <div className='flex-grow'></div>
          </div>

          <div className='w-full bg-white absolute left-0 bottom-6 lg:hidden'>
            <button
              onClick={handleSearch}
              className='flex mx-auto items-center justify-center bg-[#EB5757] w-[126px] h-12 rounded-2xl'
            >
              <SearchIcon fill='#F2F2F2' />
              <span className='ml-[10px] text-[#F2F2F2] font-mulish text-sm font-bold leading-[normal]'>
                Search
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
