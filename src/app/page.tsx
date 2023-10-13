import { Logo, Search, Star } from './components/icons'

export default function Home () {
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
          {' '}
          <Search />{' '}
        </div>
      </div>

      <div className='flex px-3 justify-between my-6'>
        <h3 className='text-[#333] text-lg font-bold'>Stays in Finland</h3>

        <span className='text-[#4F4F4F] text-sm font-medium'>12+ stays</span>
      </div>

      <div className='w-[350px] mx-auto'>
        <img
          className='w-full h-[238px] rounded-3xl my-3'
          src='https://s3-alpha-sig.figma.com/img/f663/e586/124d6e9f5d8da9e69a78ee1f5b7d81bf?Expires=1698019200&Signature=P2Qk106HuDpD3dBm2vzIoc-UE0ZrdwPC-0gtc0a-ZJj~l5XWiODbIF2B4Ox7QFZksfxfaik6F~8lmfD~UNsURKhiUcJwz-UAVtnc3bgoGMOS0bbIwFk-Lcer7ew8YtHOddWQQjSOkLPyOtKofOHnpERtJK0XxGOaAKQIFAfowxAixKODL~5xCpFnftX4-K1SpIvn-SfR6sqawcjJF~kxViuEmHojBGO9y0Qv2vb-QBrgVRJdHwfBmsF5JIuYT71U1bQmm1Jo1uyJZ3rlt6e71LkRduciqJfH2-0GCUd~BH8~zmLp0ZKpOezfFM12qtBhVC5OFh--KG9C1NfmujeUtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt=''
        />
        <div className='flex items-center my-3'>
          <button className='py-[5px] px-[8px] rounded-xl border-solid border-[1px] border-[#4F4F4F] text-[10px] font-bold text-[#4F4F4F] leading-[normal] uppercase'>
            Super Host
          </button>
          <span className='mx-[10px] flex-grow text-[#828282] text-xs leading-[normal] font-medium'>
            Entire apartment . 2 beds
          </span>
          <div className='flex items-center'>
            <Star />
            <span className='text-[#4F4F4F] text-xs leading-[normal] font-medium ml-[3px]'>
              4.40
            </span>
          </div>
        </div>
        <p className='text-[#333] text-sm leading-[normal] font-semibold'>
          Stylist apartment in center of the city
        </p>
      </div>
    </main>
  )
}
