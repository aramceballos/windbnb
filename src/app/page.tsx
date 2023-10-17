import Card from './components/card'
import { Header } from './components/header'
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
  searchParams
}: {
  searchParams?: Record<string, string | undefined>
}) {
  const res = await getStays()

  const country =
    searchParams !== undefined
      ? (searchParams.country ??= 'Finland')
      : 'Finland'
  const city = searchParams !== undefined ? (searchParams.city ??= '') : ''
  const guests =
    searchParams !== undefined ? (searchParams.guests ??= '0') : '0'

  const stays: Stay[] = res.stays.filter((stay: Stay) => {
    if (country === '') {
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
    <main className='font-montserrat h-[100vh]'>
      <Header country={country ?? ''} city={city} guests={guests} />

      <div className='flex mx-3 lg:mx-[94px] justify-between my-6'>
        <h3 className='text-[#333] text-lg font-bold'>Stays in {country}</h3>

        <span className='text-[#4F4F4F] text-sm font-medium'>
          {stays.length} stays
        </span>
      </div>

      <div className='grid mx-[12px] lg:mx-[94px] lg:gap-8 gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
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
      </div>
    </main>
  )
}
