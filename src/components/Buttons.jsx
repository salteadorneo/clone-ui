import { useEffect, useState } from 'react'
import { THEMES } from '../themes'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

// eslint-disable-next-line react/prop-types
export default function Buttons ({ theme }) {
  const [radius, setRadius] = useState('md')

  useEffect(() => {
    setRadius(THEMES[theme].buttons?.rounded ?? 'md')
  }, [theme])

  const buttonsTheme = THEMES[theme].buttons

  const html = Object.entries(THEMES[theme].colors).map(([color, value]) => (
    `<button class="text-white flex items-end justify-end px-6 py-2 border ${radius !== 'none' ? `rounded-${radius} ` : ''}bg-${color}">
    ${color}
</button>`
  )).join('\n')

  return (
    <section className='space-y-2 mb-4'>
        <h2 className='text-xl font-light mb-4'>
            Buttons
        </h2>
        <div className="flex justify-center gap-1">
            {Object.entries(buttonsTheme).map(([type, {
              backgroundColor,
              borderColor = backgroundColor,
              color,
              fontWeight = 'normal',
              rounded
            }]) => (
                <button
                    key={type}
                    className={`text-white flex items-end justify-end px-6 py-2 border rounded-${rounded}`}
                    style={{
                      backgroundColor,
                      borderColor,
                      color,
                      fontWeight
                    }}
                    title={type}
                >
                    {type}
                </button>
            ))}
        </div>
        <SyntaxHighlighter language='htmlbars' className='text-left'>
            {html}
        </SyntaxHighlighter>
        {/* <div className="inline-flex rounded-md shadow-sm" role="group">
            {['none', 'md', 'xl', 'full'].map(value => (
                <button
                    key={value}
                    type="button"
                    className={`px-4 py-2 text-sm border first:rounded-l-lg last:rounded-r-md bg-gray-700 border-gray-600 text-white hover:bg-gray-600 ${radius === value ? 'bg-gray-600' : ''}`}
                    onClick={() => setRadius(value)}
                >
                    {value}
                </button>
            ))}
        </div> */}
    </section>
  )
}
