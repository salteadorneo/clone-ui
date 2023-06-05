import ReactDOMServer from 'react-dom/server'
import Code from './Code'

export default function Component ({ text, children }) {
  const code = ReactDOMServer.renderToStaticMarkup(children)

  return (
    <section className='shadow-lg bg-gray-50 rounded'>
      <div className='flex items-center justify-center p-4'>
        {children}
      </div>

      <Code code={code} />

    </section>
  )
}
