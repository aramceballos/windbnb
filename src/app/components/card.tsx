import { StarIcon } from './icons'

interface Props {
  superHost: boolean
  title: string
  rating: number
  beds: number | null
  type: string
  photo: string
}

export default function Card ({
  superHost,
  title,
  rating,
  beds,
  type,
  photo
}: Props) {
  return (
    <div className='w-full mt-6 mb-8 cursor-pointer'>
      <img
        className='w-full aspect-[16/10] rounded-3xl my-3 object-cover'
        src={photo}
        alt=''
      />
      <div className='flex items-center my-3'>
        {superHost && (
          <div className='py-[5px] px-[8px] rounded-xl border-solid border-[1px] border-[#4F4F4F] text-[10px] font-bold text-[#4F4F4F] leading-[normal] uppercase'>
            Super Host
          </div>
        )}
        <span className='mx-[10px] flex-grow text-[#828282] text-xs leading-[normal] font-medium'>
          {type} {beds !== null && `. ${beds}`}
        </span>
        <div className='flex items-center'>
          <StarIcon />
          <span className='text-[#4F4F4F] text-xs leading-[normal] font-medium ml-[3px]'>
            {rating}
          </span>
        </div>
      </div>
      <p className='text-[#333] text-sm leading-[normal] font-semibold'>
        {title}
      </p>
    </div>
  )
}
