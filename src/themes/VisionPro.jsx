import { THEMES } from '../themes'
import Components from '../components/vision-pro/Components'
import LivePreview from '../components/vision-pro/LivePreview'
import { useState } from 'react'

const shadow = 'backdrop-blur-[50px] shadow-[0px_8px_6px_rgba(0,0,0,0.05),inset_0px_-1px_1px_rgba(255,255,255,0.1),inset_0px_1px_1px_rgba(255,255,255,0.25)]'

const SECTIONS = {
  LIVEPREVIEW: 'Live preview',
  COMPONENTS: 'Components'
}

export default function VisionPro ({ theme }) {
  const themeColors = Object.entries(THEMES[theme].colors)

  const [section, setSection] = useState(SECTIONS.LIVEPREVIEW)

  return (
    <main className='text-center bg-gray-300'>
      <style>
        {`:root {\n${
            themeColors.map(([color, value]) => (
                `   --color-${color}: ${value};`
            )).join('\n')
        }\n}`}
      </style>

      <link rel='preload' as='image' href='/vision-pro/background.webp' />
      {['video', 'music', 'menu'].map((sec) => (
        <link key={sec} rel='preload' as='image' href={`/vision-pro/background-${sec}.webp`} />
      ))}

      <section className='flex justify-center gap-6 pb-6 bg-white'>
        <h2
          className={`text-2xl font-light text-slate-600 mb-4 pb-1 cursor-default border-slate-600 hover:border-b-[1px] ${section === SECTIONS.LIVEPREVIEW ? '!border-b-2' : ''}`}
          onClick={() => setSection(SECTIONS.LIVEPREVIEW)}
        >
          Live preview
        </h2>
        <h2
          className={`text-2xl font-light text-slate-600 mb-4 pb-1 cursor-default border-slate-600 hover:border-b-[1px] ${section === SECTIONS.COMPONENTS ? '!border-b-2' : ''}`}
          onClick={() => setSection(SECTIONS.COMPONENTS)}
        >
          Components
        </h2>
      </section>

      {section === SECTIONS.LIVEPREVIEW && <LivePreview shadow={shadow} />}
      {section === SECTIONS.COMPONENTS && <Components theme={theme} shadow={shadow} />}
    </main>
  )
}
