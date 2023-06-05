
import { useState } from 'react'
import { Route } from 'wouter'
import { Toaster } from 'sonner'
import { THEMES } from './themes'
import Colors from './components/Colors'
import Logo from './components/Logo'

import { version } from '../package.json'
import Twitter from './themes/Twitter'

function App () {
  const [theme, setTheme] = useState('twitter')

  const themeColors = Object.entries(THEMES[theme].colors)

  return (
    <>
      <Toaster position='top-center' />
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
        </div>
      </header>
      <main className='p-4 pb-12 text-center bg-gray-200'>
        <section className='max-w-4xl mx-auto space-y-6'>
          <Route path='/'>
            <style>
              {`:root {\n${
                  themeColors.map(([color, value]) => (
                      `   --color-${color}: ${value};`
                  )).join('\n')
              }\n}`}
            </style>
            <Colors theme={theme} />
            {/* <Buttons theme={theme} /> */}
            <Twitter theme={theme} />
          </Route>
        </section>
      </main>
      <footer className='flex justify-center py-3 px-6'>
        <p className='flex flex-wrap items-center gap-2 text-sm text-slate-800'>
          <Logo />
          <span>by <a href='https://salteadorneo.dev' target='_blank' rel='noreferrer' className='font-bold text-gray-600'>salteadorneo.dev</a></span>
          <span>·</span>
          <span>v.{version}</span>
          <span>·</span>
          <a href='https://github.com/salteadorneo/clone-ui' target='_blank' rel='noreferrer'>GitHub</a>
        </p>
      </footer>
    </>
  )
}

export default App
