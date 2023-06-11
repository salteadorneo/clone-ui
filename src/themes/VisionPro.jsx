import { useState } from 'react'
import Component from '../components/Component'
import { THEMES } from '../themes'
import Player from '../components/vision-pro/Player'

const shadow = 'backdrop-blur-[50px] shadow-[0px_8px_6px_rgba(0,0,0,0.05),inset_0px_-1px_1px_rgba(255,255,255,0.1),inset_0px_1px_1px_rgba(255,255,255,0.25)]'

export default function VisionPro ({ theme }) {
  const themeColors = Object.entries(THEMES[theme].colors)

  const [section, setSection] = useState('video')
  const [isHovering, setIsHovering] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scale, setScale] = useState(75)

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
          width: 1280,
          height: 720,
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
        className='relative grid place-content-center aspect-[9/16] md:aspect-video shadow-2xl overflow-hidden bg-cover bg-center transition-all duration-500'
        style={{
          backgroundImage: !isPlaying && `url(/vision-pro/background-${section}.webp),url(/vision-pro/background.webp)`
        }}
      >
        <video
          id='video'
          className='absolute inset-0 w-full h-full object-cover'
          playsInline
          autoPlay
        />
        <div className='absolute bottom-2 right-2 space-x-2'>
          <button
            className='bg-white/10 hover:bg-white/30 rounded-full px-4 h-8 text-white'
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
        <div className={`flex items-center gap-9 scale-${scale} transition-all duration-700`}>
          <div
            className={`relative space-y-2.5 rounded-full p-2.5 bg-white/10 ${shadow}`}
          >
            {['video', 'music', 'frames', 'search'].map((sec, index) => (
              <button
                key={sec}
                className={`grid place-content-center w-12 rounded-full aspect-square hover:bg-white/30 ${!isHovering && section === sec ? 'bg-white/30' : ''} transition-all duration-500`}
                onClick={() => setSection(sec)}
                onMouseOver={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img src={`/vision-pro/icon${index + 1}.svg`} alt='' />
              </button>
            ))}
          </div>
          <section
            className={`basis-full relative rounded-[32px] bg-white/10 aspect-[9/16] sm:aspect-square lg:aspect-video h-[420px] lg:h-[480px] xl:h-[720px] max-h-[90%] ${shadow}`}
          >
            {section === 'video' && (
              <>
                <iframe
                  className='rounded-[32px] w-full h-full'
                  src='https://www.youtube-nocookie.com/embed/TX9qSaGXFyg?autoplay=1&controls=0&enablejsapi=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3&mute=1'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                />
                <div className='absolute inset-0' />
              </>
            )}
            {section === 'music' && (
              <>
                <section className='flex h-full'>
                  <div className='aa basis-1/3 h-full rounded-l-[32px] text-white text-left p-6'>
                    <p className='text-2xl font-bold'>Library</p>
                    <p className='opacity-75'>All Music</p>
                    <ul className='space-y-2 mt-4'>
                      <li className='flex items-center gap-4 rounded-[14px] py-3 px-6 opacity-60 hover:opacity-100 hover:bg-white/30 transition-all duration-300 cursor-default'>
                        <img src='/vision-pro/icon3.svg' alt='' />
                        Albums
                      </li>
                    </ul>
                    <p className='text-xl font-bold mt-6'>Playlists</p>
                    <ul className='space-y-2 mt-4'>
                      <li className='flex items-center gap-4 rounded-[14px] py-3 px-6 opacity-60 hover:opacity-100 hover:bg-white/30 transition-all duration-300 cursor-default'>
                        <img src='/vision-pro/icon2.svg' alt='' />
                        All Playlists
                      </li>
                    </ul>
                  </div>
                  <div className='basis-full h-full bg-white/10 rounded-r-[32px] text-white text-left px-8 py-6'>
                    <p className='text-2xl font-bold'>Playlists</p>
                    <p className='opacity-75'>0 Playlists</p>

                  </div>
                </section>
                <Player shadow={shadow} />
              </>
            )}
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
      </section>
    </>
  )
}
