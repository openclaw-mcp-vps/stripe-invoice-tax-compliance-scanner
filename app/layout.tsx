import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Invoice Tax Compliance Scanner',
  description: 'Verify Stripe invoices meet tax compliance requirements. Scan for missing tax fields, incorrect rates, and jurisdiction issues before sending.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6e7e79cb-2067-4cea-a0af-48b8d68e7126"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
