import { THEMES } from '../themes'
import Component from './Component'

export default function Buttons ({ theme }) {
  const buttonsTheme = THEMES[theme].buttons

  return (
    <section className='space-y-2'>
      <h2 className='text-2xl font-light text-slate-600 mb-4'>
        Buttons
      </h2>
      <div className='flex justify-center gap-1'>
        {Object.entries(buttonsTheme).map(([type, {
          backgroundColor,
          border = '',
          color,
          fontWeight = 'normal',
          rounded,
          py = 2,
          px = 6
        }]) => (
          <Component key={type}>
            <button
              className={`px-${px} py-${py} font-${fontWeight} ${border} rounded-${rounded} text-${color} ${backgroundColor}`}
            >
              {type}
            </button>
          </Component>
        ))}
      </div>
    </section>
  )
}
