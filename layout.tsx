export const metadata = {
  title: '100 Perak',
  description: 'Aplikasi Antrian 100 Perak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
