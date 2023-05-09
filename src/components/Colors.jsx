import { toast } from 'sonner'
import { THEMES } from '../themes'

// eslint-disable-next-line react/prop-types
export default function Colors ({ theme }) {
  function copyToClipboard (text) {
    navigator.clipboard.writeText(text)
    toast.success(`Copied ${text} to clipboard`)
  }

  return (
    <section className='space-y-2 mb-4'>
        <h2 className='text-xl font-light mb-4'>
          Colors
        </h2>
        <div className="flex justify-center">
            {Object.entries(THEMES[theme].colors).map(([color, value]) => (
              <div
                key={color}
                className="text-white w-20 aspect-[2/3] flex flex-col items-end justify-end p-2"
                style={{ backgroundColor: value }}
                title={value}
                onClick={() => copyToClipboard(value)}
              >
                  <span className="text-xs">{value}</span>
                  <span className="text-xs">{color}</span>
              </div>
            ))}
        </div>
    </section>
  )
}
