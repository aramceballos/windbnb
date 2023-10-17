import Link from 'next/link'
import { LogoIcon } from './icons'
import SearchBar from './search-bar'

interface Props {
  country: string
  city: string
  guests: string
}

export function Header ({ country, city, guests }: Props) {
  return (
    <header className='flex lg:items-center justify-between flex-col lg:flex-row mx-3 lg:mx-[94px] py-5'>
      <Link href='/' className="h-[55px] flex items-center cursor-pointer">
        <LogoIcon />
      </Link>

      <SearchBar country={country ?? ''} city={city} guests={guests} />
    </header>
  )
}
