import Card from './components/card'
import { Header } from './components/header'
import { SearchIcon } from './components/icons'
import { type Stay } from './types/stays'

async function getStays () {
  const res = await fetch('http://localhost:3000/api/stays', {
    next: {
      revalidate: 60
    }
  })

  return await res.json()
}

export default async function Home ({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams?: Record<string, string | undefined>
}) {
  const res = await getStays()

  const country = searchParams !== undefined ? searchParams.country : 'Finland'
  const city = searchParams !== undefined ? (searchParams.city ??= '') : ''
  const guests =
    searchParams !== undefined ? (searchParams.guests ??= '0') : '0'

  const stays: Stay[] = res.stays.filter((stay: Stay) => {
    if (country === undefined) {
      return stay.maxGuests >= parseInt(guests)
    }

    if (city === '') {
      return stay.country === country && stay.maxGuests >= parseInt(guests)
    }

    return (
      stay.country === country &&
      stay.city === city &&
      stay.maxGuests >= parseInt(guests)
    )
  })

  console.log(searchParams)

  return (
    <main className=' font-montserrat'>
      <Header />

      <div className='flex items-center h-[55px] w-[298px] my-[38px] mx-auto rounded-[16px] shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] font-mulish'>
        <div className='py-5 px-4 flex-grow'>
          <span className='text-[#333] text-sm font-normal'>
            {city?.length > 0 ? `${city}, ${country}` : country}
          </span>
        </div>
        <div className='h-[55px] w-[1px] bg-[#F2F2F2]' />
        <div className='py-5 px-4'>
          <span style={{ color: guests !== '0' ? '#333' : '#BDBDBD' }} className='text-sm font-normal'>{guests !== '0' ? `${guests} guests` : 'Add guests'}</span>
        </div>
        <div className='h-[55px] w-[1px] bg-[#F2F2F2]' />
        <div className='py-5 pl-[19px] pr-[17px]'>
          <SearchIcon />
        </div>
      </div>

      <div className='flex px-3 justify-between my-6'>
        <h3 className='text-[#333] text-lg font-bold'>Stays in {country}</h3>

        <span className='text-[#4F4F4F] text-sm font-medium'>
          {stays.length} stays
        </span>
      </div>

      {stays.map((stay) => (
        <Card
          key={stay.id}
          superHost={stay.superHost}
          title={stay.title}
          rating={stay.rating}
          beds={stay.beds}
          type={stay.type}
          photo={stay.photo}
        />
      ))}
    </main>
  )
}
