import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js 퀵 스타트!',
  description: 'Next.js 사용법을 빠르게 살펴봅시다.',
}

type Props = Readonly<{ children: React.ReactNode }>

function RootLayout({ children }: Props) {
  return (
    <html lang="ko-KR">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}

export default RootLayout
