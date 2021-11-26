import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia as style } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeComponent: React.FC<any> = ({ children }) => {
  return (
    <SyntaxHighlighter
      language="tsx"
      style={style}
      showLineNumbers
      wrapLongLines
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeComponent
