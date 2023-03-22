import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="dark" lang="en">
      <Head />
      <body className="p-2 mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
