export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Tax Compliance for Stripe
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Stop Sending Non-Compliant Invoices
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically scan your Stripe invoices for missing tax fields, incorrect rates, and jurisdiction issues — before they reach your customers.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Missing Tax Fields', desc: 'Detect invoices lacking required tax IDs, VAT numbers, or jurisdiction codes.' },
            { title: 'Incorrect Rates', desc: 'Flag line items with wrong tax rates for the customer\'s country or state.' },
            { title: 'Jurisdiction Rules', desc: 'Validate compliance with EU VAT, US sales tax, and GST requirements.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold mb-2">{f.title}</div>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited invoice scans',
              'Real-time webhook analysis',
              'Compliance reports & fixes',
              'EU VAT, US sales tax, GST',
              'Email alerts on issues',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: 'How does it connect to my Stripe account?',
              a: 'You provide your Stripe API key in the dashboard. We use read-only access to scan your invoices and set up a webhook to analyze new ones in real time.',
            },
            {
              q: 'Which tax jurisdictions are supported?',
              a: 'We support EU VAT (all 27 member states), US state sales tax, Canadian GST/HST, and Australian GST. More jurisdictions are added regularly.',
            },
            {
              q: 'What happens when a compliance issue is found?',
              a: 'You receive an instant email alert with a detailed report listing the exact issue, the affected invoice, and step-by-step instructions to fix it before sending.',
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Stripe Invoice Tax Compliance Scanner. All rights reserved.
      </footer>
    </main>
  )
}
