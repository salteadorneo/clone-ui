import Component from '../components/Component'

export default function Twitter ({ theme }) {
  return (
    <>
      <Component>
        <button
          className='rounded-full px-6 py-2 font-bold text-white bg-primary'
        >
          Primary button
        </button>
      </Component>
      <Component>
        <button
          className='rounded-full px-16 py-3 font-bold text-white text-lg bg-primary'
        >
          Twittear
        </button>
      </Component>
      <Component>
        <button className='relative rounded-full p-3 text-white hover:bg-black/10'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><g><path d='M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z' /></g></svg>
          <div className='absolute top-2 right-2 w-2 h-2 rounded-full bg-primary' />
        </button>
      </Component>
      <Component>
        <button className='relative rounded-full p-3 text-white hover:bg-black/10'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><g><path d='M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z' /></g></svg>
          <div className='absolute top-2 right-2 w-4 aspect-square rounded-full bg-primary text-[11px]'>1</div>
        </button>
      </Component>
    </>
  )
}
