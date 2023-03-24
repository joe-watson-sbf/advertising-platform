import Head from 'next/head'
import '../styles/main.scss'
import Header from '@/components/header'

export const metadata = {
  title: 'Advertising Platform',
  description: 'An advertising platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
