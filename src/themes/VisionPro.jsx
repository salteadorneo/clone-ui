import { useEffect, useState } from 'react'
import { THEMES } from '../themes'
import Component from '../components/Component'
import Player from '../components/vision-pro/Player'
import MenuItem from '../components/vision-pro/MenuItem'
import Menu from '../components/vision-pro/Menu'
import BallItem from '../components/vision-pro/BallItem'

const windowWidth = window.innerWidth / 5
const windowHeight = window.innerHeight / 5

const shadow = 'backdrop-blur-[50px] shadow-[0px_8px_6px_rgba(0,0,0,0.05),inset_0px_-1px_1px_rgba(255,255,255,0.1),inset_0px_1px_1px_rgba(255,255,255,0.25)]'

export default function VisionPro ({ theme }) {
  const themeColors = Object.entries(THEMES[theme].colors)

  const [isLoading, setIsLoading] = useState(false)
  const [section, setSection] = useState('menu')
  const [isHovering, setIsHovering] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scale, setScale] = useState(75)

  useEffect(() => {
    const bg = document.getElementById('bg')
    document.body.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth
      const mouseY = e.clientY / windowHeight
      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`
    })
  }, [])

  function handleSection (sec) {
    setIsLoading(true)
    setSection(sec)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
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

  return (
    <>
      <style>
        {`:root {\n${
            themeColors.map(([color, value]) => (
                `   --color-${color}: ${value};`
            )).join('\n')
        }\n}`}
      </style>

      <h2 className='text-2xl font-light text-slate-600 mb-4'>
        Live preview
      </h2>
      <section
        className='relative grid place-content-center aspect-[9/16] md:aspect-video shadow-2xl overflow-hidden'
      >
        <div
          id='bg'
          className={`absolute inset-0 w-[120%] h-[120%] bg-no-repeat ${isLoading ? 'transition-all duration-500' : ''}`}
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
        <div className='absolute bottom-2 right-2 space-x-2'>
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
            className={`flex flex-col gap-16 ${section === 'menu' ? 'opacity-100 transition-all duration-500' : 'absolute opacity-0'}`} onClick={() => handleSection('video')}
          >
            <Menu shadow={shadow} />
          </section>
          <section className={`flex items-center gap-9 ${section !== 'menu' ? 'opacity-100 transition-all duration-500' : 'absolute opacity-0'}`}>
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
                <Player className='absolute left-1/2 -translate-x-1/2 -bottom-8 w-2/3' shadow={shadow} />
              </section>
            </section>
          </section>
        </div>
      </section>

      <h2 className='text-2xl font-light text-slate-600 mb-4'>
        Buttons
      </h2>
      <section className='space-y-4'>
        <Component className='bg-[#244967]'>
          <button
            className='grid place-content-center w-12 rounded-full aspect-square hover:bg-white/30 transition-all duration-300'
          >
            <img src='/vision-pro/icon1.svg' alt='' />
          </button>
        </Component>
        <Component className='bg-[#244967]'>
          <div
            className={`relative space-y-2.5 rounded-full p-2.5 bg-white/10 ${shadow}`}
          >
            {['video', 'music', 'frames', 'search'].map((sec, index) => (
              <button
                key={sec}
                className='grid place-content-center w-12 rounded-full aspect-square hover:bg-white/30 transition-all duration-300'
              >
                <img src={`/vision-pro/icon${index + 1}.svg`} alt={sec} />
              </button>
            ))}
          </div>
        </Component>
        <Component className='bg-[#244967]'>
          <Player shadow={shadow} />
        </Component>
        <Component className='bg-[#244967]'>
          <MenuItem text='All Playlists' image='icon-allplaylists.svg' />
        </Component>
        <Component className='bg-[#244967]'>
          <BallItem
            className='from-[#0061E3] to-[#00B1EF]'
            text='App Store'
            shadow={shadow}
            icon={
              <svg width={90} height={90} fill='currentColor' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <path d='M30.62 20.419a1.841 1.841 0 0 0-.96-.672l-.013-.003a2.47 2.47 0 0 0-.555-.088h-.006c-.21-.012-.419-.011-.629-.011h-4.15l-5.485-9.768a5.064 5.064 0 0 0-1.343 2.718l-.004.029a5.786 5.786 0 0 0 .697 3.778l-.015-.028 6.591 11.738c.105.187.209.374.324.554.107.172.224.32.355.456l-.001-.001c.275.28.639.471 1.046.528l.01.001a1.783 1.783 0 0 0 1.159-.242l-.008.005c.349-.211.618-.523.771-.894l.005-.012a1.9 1.9 0 0 0 .142-.728c0-.169-.022-.334-.062-.49l.003.014a2.685 2.685 0 0 0-.213-.558l.007.015c-.094-.193-.2-.379-.305-.565l-1.52-2.707h1.994c.21 0 .419.001.628-.011.203-.009.395-.041.578-.092l-.018.004c.4-.117.735-.355.97-.671l.003-.005c.235-.316.376-.714.376-1.144s-.141-.829-.38-1.15l.004.005zM4.894 24.175l-.99 1.875c-.102.194-.205.387-.298.588a2.81 2.81 0 0 0-.197.544l-.004.02a2.127 2.127 0 0 0 .086 1.267l-.005-.015c.15.395.414.719.751.939l.007.005a1.647 1.647 0 0 0 1.135.246l-.009.001a1.745 1.745 0 0 0 1.031-.549l.001-.001c.127-.139.242-.294.339-.46l.007-.013c.113-.188.214-.382.317-.576l1.436-2.72a3.035 3.035 0 0 0-3.628-1.145l.021-.007zm7.118-4.527 7.636-13.792c.105-.189.21-.377.305-.573.081-.157.151-.34.201-.531l.004-.019a1.975 1.975 0 0 0-.088-1.234l.005.013a1.9 1.9 0 0 0-.767-.914l-.008-.005a1.75 1.75 0 0 0-1.16-.239l.009-.001a1.816 1.816 0 0 0-1.055.535v.001c-.13.136-.247.287-.347.449l-.007.012c-.115.183-.219.372-.324.561l-.483.872-.483-.872c-.105-.189-.208-.379-.323-.561a2.729 2.729 0 0 0-.355-.462l.001.001a1.804 1.804 0 0 0-1.045-.535l-.01-.001a1.764 1.764 0 0 0-1.158.245l.008-.004a1.907 1.907 0 0 0-.771.906l-.005.013c-.09.219-.142.472-.142.738 0 .171.022.338.062.496l-.003-.014c.055.21.125.393.213.566l-.007-.016c.094.195.2.384.305.573l1.56 2.817-6.076 10.975H3.54c-.209 0-.419-.001-.628.012a2.459 2.459 0 0 0-.578.094l.018-.004c-.401.119-.735.36-.969.68l-.004.005c-.235.321-.376.724-.376 1.159s.141.838.38 1.165l-.004-.006c.237.325.571.566.959.681l.013.003c.165.048.357.08.554.089h.006c.209.012.419.011.628.011h16.367c.045-.093.087-.205.121-.321l.004-.016a2.742 2.742 0 0 0-2.539-3.553h-.004z' />
              </svg>
            }
          />
        </Component>
      </section>
    </>
  )
}
