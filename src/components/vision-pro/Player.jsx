export default function Player ({ shadow }) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 -bottom-8 flex justify-between gap-2 w-2/3 rounded-full p-2.5 bg-[#244967]/95 ${shadow}`}
    >
      {['prev', 'pause', 'next'].map((sec, index) => (
        <button
          key={sec}
          className='grid place-content-center w-12 rounded-full aspect-square hover:bg-white/30 transition-all duration-300'
        >
          <img src={`/vision-pro/iconplayer${index + 1}.svg`} alt='' />
        </button>
      ))}
      <div
        className='bg-black/20 p-2 w-[350px] rounded-lg'
      >
        <div className='w-8 h-8 rounded-[4px] bg-slate-200' />
      </div>
      {['comment', 'list', 'volume'].map((sec, index) => (
        <button
          key={sec}
          className='grid place-content-center w-12 rounded-full aspect-square hover:bg-white/30 transition-all duration-300'
        >
          <img src={`/vision-pro/iconplayer${index + 4}.svg`} alt='' />
        </button>
      ))}
    </div>
  )
}
