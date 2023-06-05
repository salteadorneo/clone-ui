import { toast } from 'sonner'
import { THEMES } from '../themes'
import { useState } from 'react'
import Code from './Code'

// eslint-disable-next-line react/prop-types
export default function Colors ({ theme }) {
  const [tab, setTab] = useState('tailwind')

  const themeColors = Object.entries(THEMES[theme].colors)

  const values = {
    tailwind: `theme: {
  colors: {
${themeColors.map(([color, value]) => (
    `   '${color}': '${value}',`
    )).join('\n')}
  }
}`,
    css: `:root {\n${
        themeColors.map(([color, value]) => (
            `   --color-${color}: ${value};`
        )).join('\n')
    }\n}`,
    svg: `<svg width="${themeColors.length * 100}" height="100" viewBox="0 0 ${themeColors.length * 100} 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n${
        themeColors.map(([color, value], idx) => (
            `   <rect width="100" height="100" fill="${value}" x="${idx * 100}" y="0" />`
        )).join('\n')
    }\n</svg>`
  }

  function handleTab (e) {
    e.preventDefault()
    setTab(e.target.innerText.toLowerCase())
  }

  function copyToClipboard (text) {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  return (
    <section className=''>
      <h2 className='text-2xl font-light text-slate-600 mb-4'>
        Colors
      </h2>
      <div className='flex justify-center'>
        {Object.entries(THEMES[theme].colors).map(([color, value]) => (
          <div
            key={color}
            className='w-[100px] aspect-square flex flex-col items-end justify-end p-2 cursor-copy'
            style={{ backgroundColor: value }}
            title={value}
            onClick={() => copyToClipboard(value)}
          >
            <span className='text-xs text-white drop-shadow'>{value}</span>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-4 mt-4'>
        {['Tailwind', 'CSS', 'SVG'].map(value => (
          <button
            key={value}
            onClick={handleTab}
            className={`${tab === value.toLowerCase() ? 'bg-[#f0f0f0]' : ''} py-1 px-3`}
          >
            {value}
          </button>
        ))}
      </div>
      <Code code={values[tab]} language={tab === 'svg' ? 'html' : 'css'} />
    </section>
  )
}
