import Card from './components/card'
import { Logo, Search } from './components/icons'
import { type Stay } from './types/stays'

async function getStays () {
  const res = await fetch('http://localhost:3000/api/stays', {
    next: {
      revalidate: 60
    }
  })

  return await res.json()
}

export default async function Home () {
  const res = await getStays()

  const stays: Stay[] = res.stays

  return (
    <main className=' font-montserrat'>
      <header className='px-3 py-5 w-full'>
        <Logo />
      </header>
      <div className='flex items-center h-[55px] w-[298px] my-[38px] mx-auto rounded-[16px] shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] font-mulish'>
        <div className='py-5 px-4'>
          <span className='text-[#333] text-sm font-normal'>
            Helsinki, Finland
          </span>
        </div>
        <div className='h-[55px] w-[1px] bg-[#F2F2F2]' />
        <div className='py-5 px-4'>
          <span className='text-[#BDBDBD] text-sm font-normal'>Add guests</span>
        </div>
        <div className='h-[55px] w-[1px] bg-[#F2F2F2]' />
        <div className='py-5 pl-[19px] pr-[17px]'>
          <Search />
        </div>
      </div>

      <div className='flex px-3 justify-between my-6'>
        <h3 className='text-[#333] text-lg font-bold'>Stays in Finland</h3>

        <span className='text-[#4F4F4F] text-sm font-medium'>
          {stays.length} stays
        </span>
      </div>

      {stays.length > 0 && stays.map((stay) => (
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
