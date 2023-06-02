import ReactDOMServer from 'react-dom/server'

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { toast } from 'sonner'
import { Clipboard } from '../Icons'

export default function Component ({ text, children }) {
  const code = ReactDOMServer.renderToStaticMarkup(children)

  function copyToClipboard (sender) {
    navigator.clipboard.writeText(sender.currentTarget.outerHTML)
    toast.success('Copied to clipboard')
  }

  return (
    <section className='shadow-lg bg-gray-50 rounded'>
      <div className='flex items-center justify-center p-4'>
        {children}
      </div>

      <div className='relative text-left'>
        <button
          className='absolute top-0 right-0 p-2 rounded-bl'
          onClick={copyToClipboard}
        >
          <Clipboard />
        </button>

        <SyntaxHighlighter
          className='rounded'
          language='html'
          wrapLines
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>

    </section>
  )
}
