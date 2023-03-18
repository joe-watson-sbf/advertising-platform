import '../styles/main.scss'

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
      <body>{children}</body>
    </html>
  )
}
