import type { Metadata } from 'next'
import './globals.scss'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Deverse',
  description: "Deverse: Your new coding BFF. Share snippets, ask doubts, & find your dev tribe. It's like LinkedIn for coders! Join now!",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  )
}
