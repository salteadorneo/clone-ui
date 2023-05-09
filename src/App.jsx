
import { useState } from 'react'
import { Link, Route } from 'wouter'
import { Toaster } from 'sonner'
import { THEMES } from './themes'
import Colors from './components/Colors'
import Buttons from './components/Buttons'
import Logo from './components/Logo'
import Export from './components/Export'

function App () {
  const [theme, setTheme] = useState('twitter')

  return (
    <>
      <Toaster position="top-center" />
      <header className='flex justify-between py-3 px-6'>
        <h1>
          <a href='/'>
            <Logo />
          </a>
        </h1>

        <div className='flex items-center gap-4'>
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            className='p-2 rounded-md bg-slate-100 text-slate-800'
          >
            {Object.entries(THEMES).map(([theme, { name }]) => (
              <option key={theme} value={theme}>{name}</option>
            ))}
          </select>

          <nav className='flex items-center gap-3'>
            <Link href='/'>Preview</Link>
            <Link href='/export'>Export</Link>
          </nav>
        </div>
      </header>
      <main className="p-4 text-center bg-gray-50">
        <section className='max-w-4xl mx-auto'>
          <Route path="/">

            <Colors theme={theme} />

            <Buttons theme={theme} />

          </Route>
          <Route path="/export">
            <Export theme={theme} />
          </Route>
        </section>
      </main>
      {/* <footer className='flex justify-center py-3 px-6'>
        <p className='flex items-center gap-2 text-slate-800'>
          <Logo /> by <a href='https://salteadorneo.dev' target='_blank' rel="noreferrer">salteadorneo.dev</a>
        </p>
      </footer> */}
    </>
  )
}

export default App
