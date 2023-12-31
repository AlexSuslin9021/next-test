import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import TheFooter from "@/components/TheFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={'container'}>
    <Header/>
    <main >{children}</main>
      {/*<body className={inter.className}>{children}</body>*/}

    <TheFooter/>
    </body>
    </html>
  )
}
