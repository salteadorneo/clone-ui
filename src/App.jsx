
import { useState } from 'react'
import { Route } from 'wouter'
import { Toaster } from 'sonner'
import { THEMES } from './themes'
import Logo from './components/Logo'

import { version } from '../package.json'
import Twitter from './themes/Twitter'
import VisionPro from './themes/VisionPro'

function App () {
  const subdomain = window.location.host.split('.')[0]
  const themeFromSubdomain = Object.keys(THEMES).find(theme => theme === subdomain)

  const [theme, setTheme] = useState(themeFromSubdomain ?? 'vision-pro')

  return (
    <>
      <Toaster position='top-center' />
      <header className='flex justify-between py-3 px-6'>
        <h1>
          <a href='/'>
            <Logo />
          </a>
        </h1>

        {!themeFromSubdomain && (
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
        )}
      </header>
      <Route path='/'>
        {theme === 'vision-pro' && (
          <VisionPro theme={theme} />
        )}
        {theme === 'twitter' && (
          <Twitter theme={theme} />
        )}
      </Route>
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
