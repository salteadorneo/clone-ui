import { useState } from 'react'
import { THEMES } from '../themes'

// eslint-disable-next-line react/prop-types
export default function Export ({ theme }) {
  const [type, setType] = useState('CSS')

  const themeColors = Object.entries(THEMES[theme].colors)

  const VALUES = {
    CSS: `:root {\n${
        themeColors.map(([color, value]) => (
            `   --color-${color}: ${value};`
        )).join('\n')
    }\n}`,
    SVG: `<svg width="${themeColors.length * 100}" height="100" viewBox="0 0 ${themeColors.length * 100} 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n${
        themeColors.map(([color, value], idx) => (
            `   <rect width="100" height="100" fill="${value}" x="${idx * 100}" y="0" />`
        )).join('\n')
    }\n</svg>`
  }

  return (
    <>
        <h2 className='text-xl font-light mb-4'>
            Export
        </h2>
        <div className="inline-flex rounded-md shadow-sm" role="group">
            {['CSS', 'SVG'].map(value => (
                <button
                    key={value}
                    type="button"
                    className={`px-4 py-2 text-sm border first:rounded-l-lg last:rounded-r-md bg-gray-700 border-gray-600 text-white hover:bg-gray-600 ${type === value ? 'bg-gray-600' : ''}`}
                    onClick={() => setType(value)}
                >
                    {value}
                </button>
            ))}
        </div>
        <pre className='text-left'>
            {VALUES[type]}
        </pre>
    </>
  )
}
