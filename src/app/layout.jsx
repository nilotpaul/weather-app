import Header from '@/components/Header'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export const metadata = {
  title: 'Weather App',
  description: 'made by Nilotpaul Nandi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="global_container">
          {children}
        </main>
      </body>
    </html>
  )
}
