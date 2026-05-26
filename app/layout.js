import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: 'Stéphane Aimé — Développeur Full-Stack',
  description: 'Portfolio de Stéphane Aimé, développeur Full-Stack spécialisé en JavaScript, React, Node.js et Next.js.',
  keywords: ['développeur', 'full-stack', 'React', 'Node.js', 'Next.js', 'JavaScript'],
  authors: [{ name: 'Stéphane Aimé' }],
  openGraph: {
    title: 'Stéphane Aimé — Développeur Full-Stack',
    description: 'Portfolio de Stéphane Aimé, développeur Full-Stack.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  )
}