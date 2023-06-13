import { useEffect, useRef, useState } from 'react'
import Player from './Player'
import MenuItem from './MenuItem'
import Menu from './Menu'
import { useWindowSize } from '../../hooks/useWindowSize'

const windowWidth = window.innerWidth / 5
const windowHeight = window.innerHeight / 5

const MIN_RESOLUTION = 1200

export default function LivePreview ({ shadow }) {
  const bg = useRef(null)

  const size = useWindowSize()

  const [isLoading, setIsLoading] = useState(false)
  const [section, setSection] = useState('menu')
  const [isHovering, setIsHovering] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scale, setScale] = useState(75)

  useEffect(() => {
    document.body.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth
      const mouseY = e.clientY / windowHeight
      bg.current.style.transform = `translate3d(-${mouseX / 8}%, -${mouseY / 8}%, 0)`
    })
  }, [])

  function handleSection (sec) {
    setIsLoading(true)
    setSection(sec)
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }

  function handleZoomIn () {
    if (scale < 100) {
      setScale(scale + 25)
    }
  }

  function handleZoomOut () {
    if (scale > 50) {
      setScale(scale - 25)
    }
  }

  async function handleCamera () {
    const video = document.getElementById('video')
    if (!isPlaying) {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: {
            exact: 'environment'
          }
        }
      })
      video.srcObject = stream
      setIsPlaying(true)
    } else {
      video.srcObject = null
      setIsPlaying(false)
    }
  }

  if (size.width < MIN_RESOLUTION) {
    return (
      <section className='py-8'>
        Minimal resolution is {MIN_RESOLUTION}px
      </section>
    )
  }

  return (
    <section
      className='relative grid place-content-center aspect-[9/16] md:aspect-video shadow-2xl overflow-hidden'
    >
      <div
        ref={bg}
        className={`absolute inset-0 w-[105%] h-[105%] bg-cover bg-no-repeat ${isLoading ? 'transition-all duration-500' : ''}`}
        style={{
          backgroundImage: !isPlaying && `url(/vision-pro/background-${section}.webp),url(/vision-pro/background.webp)`
        }}
      />
      <video
        id='video'
        className='absolute inset-0 w-full h-full object-cover'
        playsInline
        autoPlay
      />
      <div className='absolute bottom-3 right-2 space-x-2'>
        <button
          className='hidden bg-white/10 hover:bg-white/30 rounded-full px-4 h-8 text-white'
          onClick={handleCamera}
        >
          Camera
        </button>
        <button
          className='bg-white/10 hover:bg-white/30 rounded-full w-8 h-8 text-white'
          onClick={handleZoomOut}
        >
          -
        </button>
        <button
          className='bg-white/10 hover:bg-white/30 rounded-full w-8 h-8 text-white'
          onClick={handleZoomIn}
        >
          +
        </button>
      </div>
      <div className={`scale-${scale} transition-all duration-700`}>
        <section
          className={`flex flex-col gap-16 ${section === 'menu' ? 'opacity-100 transition-all duration-500' : 'absolute -left-full opacity-0'}`} onClick={() => handleSection('video')}
        >
          <Menu shadow={shadow} loading={isLoading} />
        </section>
        <section className={`flex items-center gap-9 ${section !== 'menu' ? 'opacity-100 transition-all duration-500' : 'absolute -left-full opacity-0'}`}>
          <section
            className={`relative space-y-2.5 rounded-full p-2.5 bg-white/10 ${shadow}`}
          >
            {['video', 'music', 'menu', 'search'].map((sec, index) => (
              <button
                key={sec}
                className={`grid place-content-center w-12 rounded-full aspect-square hover:bg-white/30 ${!isHovering && section === sec ? 'bg-white/30' : ''} transition-all duration-500`}
                onClick={() => handleSection(sec)}
                onMouseOver={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img src={`/vision-pro/icon${index + 1}.svg`} alt='' />
              </button>
            ))}
          </section>
          <section
            className={`basis-full relative rounded-[32px] bg-white/10 aspect-[9/16] sm:aspect-square lg:aspect-video h-[420px] lg:h-[480px] xl:h-[720px] max-h-[90%] ${shadow}`}
          >
            <section className={`absolute w-full h-full ${section === 'video' ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
              <iframe
                className='rounded-[32px] w-full h-full'
                src='https://www.youtube-nocookie.com/embed/TX9qSaGXFyg?autoplay=1&controls=0&enablejsapi=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3&mute=1'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
              <div className='absolute inset-0' />
            </section>
            <section className={`absolute flex w-full h-full ${section === 'music' ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
              <div className='aa basis-1/3 h-full rounded-l-[32px] text-white text-left py-6 px-2'>
                <p className='flex items-center justify-between text-2xl font-bold px-4'>
                  Library
                  <img src='/vision-pro/icon-menu.svg' alt='' />
                </p>
                <p className='opacity-75 px-4'>All Music</p>
                <ul className='space-y-2 mt-4'>
                  <MenuItem text='Recently Added' image='icon-clock.svg' className='bg-white/30 opacity-100' />
                  <MenuItem text='Artists' image='icon-micro.svg' />
                  <MenuItem text='Albums' image='icon1.svg' />
                </ul>
                <p className='flex items-center justify-between text-xl font-bold mt-6 px-4'>
                  Playlists
                  <img src='/vision-pro/icon-down.svg' alt='' />
                </p>
                <ul className='space-y-2 mt-4'>
                  <MenuItem text='All Playlists' image='icon-allplaylists.svg' />
                  <MenuItem text='Add Playlist' image='icon-plus.svg' />
                </ul>
              </div>
              <div className='basis-full h-full bg-white/10 rounded-r-[32px] text-white text-left px-8 py-6'>
                <p className='text-2xl font-bold'>Playlists</p>
                <p className='opacity-75'>0 Playlists</p>

              </div>
              <Player className='absolute left-1/2 -translate-x-1/2 -bottom-8 w-3/5' shadow={shadow} />
            </section>
          </section>
        </section>
      </div>
    </section>
  )
}
