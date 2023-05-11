import { toast } from 'sonner'
import { THEMES } from '../themes'

// eslint-disable-next-line react/prop-types
export default function Buttons ({ theme }) {
  function copyToClipboard (idx) {
    navigator.clipboard.writeText(html[idx])
    toast.success('Copied to clipboard')
  }

  const buttonsTheme = THEMES[theme].buttons

  const html = Object.entries(buttonsTheme).map(([type, {
    backgroundColor,
    borderColor = backgroundColor,
    color,
    fontWeight = 'normal',
    rounded
  }]) => (
    `<button class="text-${color} font-${fontWeight} flex items-end justify-end px-6 py-2 border border-[${borderColor}] ${rounded !== 'none' ? `rounded-${rounded} ` : ''}bg-[${backgroundColor}]">
    ${type}
</button>`
  ))

  return (
    <section className='space-y-2'>
        <h2 className='text-2xl font-light text-slate-600 mb-4'>
            Buttons
        </h2>
        <div className="flex justify-center gap-1">
            {Object.entries(buttonsTheme).map(([type, {
              backgroundColor,
              borderColor = backgroundColor,
              color,
              fontWeight = 'normal',
              rounded,
              py = 2,
              px = 6
            }], idx) => (
                <button
                    key={type}
                    className={`text-white flex items-end justify-end px-${px} py-${py} font-${fontWeight} border rounded-${rounded} cursor-copy`}
                    style={{
                      backgroundColor,
                      borderColor,
                      color
                    }}
                    onClick={() => copyToClipboard(idx)}
                >
                    {type}
                </button>
            ))}
        </div>
    </section>
  )
}
