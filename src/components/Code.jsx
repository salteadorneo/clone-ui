import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { toast } from 'sonner'
import { Clipboard } from '../Icons'

export default function Code ({ code, language = 'html' }) {
  function copyToClipboard () {
    navigator.clipboard.writeText(code)
    toast.success('Copied to clipboard')
  }

  return (
    <div className='relative text-left'>
      <button
        className='absolute top-0 right-0 p-2 bg-gray-50 hover:text-primary'
        onClick={copyToClipboard}
      >
        <Clipboard />
      </button>

      <SyntaxHighlighter
        className='rounded-b text-sm '
        style={githubGist}
        language={language}
        wrapLines
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
