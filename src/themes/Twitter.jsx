import Component from '../components/Component'

export default function Twitter ({ theme }) {
  return (
    <>
      <h2 className='text-2xl font-light text-slate-600 mb-4'>
        Buttons
      </h2>
      <section className='grid sm:grid-cols-2 gap-6'>
        <Component>
          <button
            className='rounded-full px-6 py-2 font-bold text-white bg-primary'
          >
            Twittear
          </button>
        </Component>
        <Component>
          <button
            className='rounded-full px-16 py-3 font-bold text-white text-lg bg-primary'
          >
            Twittear
          </button>
        </Component>
      </section>
      <Component bg='bg-black'>
        <button
          className='flex items-center relative rounded-full p-3 text-[#e7e9ea] hover:bg-[#e7e9ea]/10'
          title='Inicio'
        >
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><g><path d='M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z' /></g></svg>
          <div className='absolute top-2 left-7 w-2 h-2 rounded-full bg-primary' />
          <span className='hidden sm:block px-4 text-xl'>
            Inicio
          </span>
        </button>
      </Component>
      <Component>
        <button className='relative rounded-full p-3 text-[#0f1419] hover:bg-[#0f1419]/10'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><g><path d='M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z' /></g></svg>
          <div className='absolute top-2 right-2 w-4 h-4 rounded-full bg-primary text-[11px] text-white'>1</div>
        </button>
      </Component>
      <h2 className='text-2xl font-light text-slate-600 mb-4'>
        Form
      </h2>
      <Component>
        <label className='relative flex rounded-full py-3 px-4 text-white bg-black/10'>
          <svg width={24} height={24} viewBox='0 0 24 24' aria-hidden='true'>
            <g>
              <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z' />
            </g>
          </svg>
          <input
            type='text'
            placeholder='Buscar en Twitter'
            className='bg-transparent outline-none w-full text-black pl-4'
          />
        </label>
      </Component>
    </>
  )
}
