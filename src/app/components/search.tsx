import { SearchIcon } from './icons'

interface Props {
  location: string
  onChangeLocation: (location: string) => void
}

export default function Search ({ location, onChangeLocation }: Props) {
  return (
    <>
    <div className='flex items-center h-[55px] w-[298px] my-[38px] mx-auto rounded-[16px] shadow-[0_1px_6px_0_rgba(0,0,0,0.1)] font-mulish'>
      <div className='py-5 px-4'>
        <span className='text-[#333] text-sm font-normal'>{location}</span>
      </div>
      <div className='h-[55px] w-[1px] bg-[#F2F2F2]' />
      <div className='py-5 px-4'>
        <span className='text-[#BDBDBD] text-sm font-normal'>Add guests</span>
      </div>
      <div className='h-[55px] w-[1px] bg-[#F2F2F2]' />
      <div className='py-5 pl-[19px] pr-[17px]'>
        <SearchIcon />
      </div>
    </div>

    <div className='absolute top-0 left-0 w-full'>

    </div>
    </>
  )
}
