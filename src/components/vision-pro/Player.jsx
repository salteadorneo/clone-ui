export default function Player ({ className, shadow }) {
  return (
    <div
      className={`${className} flex items-center justify-between gap-2 rounded-full p-2.5 bg-[#244967]/95 ${shadow}`}
    >
      {['prev', 'pause', 'next'].map((sec, index) => (
        <button
          key={sec}
          className='grid place-content-center w-12 h-12 rounded-full hover:bg-white/30 transition-all duration-300'
        >
          <img src={`/vision-pro/iconplayer${index + 1}.svg`} alt='' />
        </button>
      ))}
      <div
        className='flex items-center justify-between bg-black/20 text-white p-2 w-[350px] rounded-lg'
      >
        <div className='flex items-center gap-3 text-left'>
          <div className='w-8 h-8 rounded-[4px] bg-slate-200' />
          <div>
            <p className='leading-tight'>Song 1</p>
            <p className='text-[13px] leading-tight'>Artist</p>
          </div>
        </div>
        <button
          className='grid place-content-center w-8 h-8 rounded-md hover:bg-white/30 transition-all duration-300'
        >
          <img src='/vision-pro/icon-points.svg' alt='' />
        </button>
      </div>
      {['comment', 'list', 'volume'].map((sec, index) => (
        <button
          key={sec}
          className='grid place-content-center w-12 h-12 rounded-full hover:bg-white/30 transition-all duration-300'
        >
          <img src={`/vision-pro/iconplayer${index + 4}.svg`} alt='' />
        </button>
      ))}
    </div>
  )
}
