import { toast } from 'sonner'
import { THEMES } from '../themes'

// eslint-disable-next-line react/prop-types
export default function Colors ({ theme }) {
  function copyToClipboard (text) {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  const themeColors = Object.entries(THEMES[theme].colors)

  const css = `:root {\n${
        themeColors.map(([color, value]) => (
            `   --color-${color}: ${value};`
        )).join('\n')
    }\n}`

  const svg = `<svg width="${themeColors.length * 100}" height="100" viewBox="0 0 ${themeColors.length * 100} 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n${
        themeColors.map(([color, value], idx) => (
            `   <rect width="100" height="100" fill="${value}" x="${idx * 100}" y="0" />`
        )).join('\n')
    }\n</svg>`

  return (
    <section className='space-y-2'>
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
            {/* <span className="text-xs">{value}</span>
                <span className="text-xs">{color}</span> */}
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center gap-4'>
        {['CSS', 'SVG'].map(value => (
          <button
            key={value}
            onClick={() => copyToClipboard(value === 'CSS' ? css : svg)}
          >
            {value}
          </button>
        ))}
      </div>
    </section>
  )
}
