import { useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import Code from './Code'

export default function Component ({ className, children }) {
  const [showCode, setShowCode] = useState(false)

  function handleToggleCode () {
    setShowCode(!showCode)
  }

  if (!children) return null

  const code = ReactDOMServer.renderToStaticMarkup(children)

  return (
    <section className='relative flex flex-col justify-between shadow-lg bg-gray-50 rounded'>
      <div className={`grid place-content-center py-4 ${className}`}>
        {children}
      </div>
      <button
        className='absolute top-1 right-1 text-gray-600 hover:text-primary'
        onClick={handleToggleCode}
      >
        <svg width={24} height={24} fill='currentColor' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
          <path d='M4.708 5.578 2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z' />
        </svg>
      </button>
      {showCode && <Code code={code} />}
    </section>
  )
}
