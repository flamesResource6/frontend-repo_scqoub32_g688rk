import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Symptoms, Prevention, Diagnosis, Resources } from './components/Sections'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-emerald-50 text-slate-800 antialiased">
      {/* Decorative grid background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(16,185,129,0.08),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(16,185,129,0.06),transparent)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,black,transparent)] bg-[linear-gradient(to_right,rgba(2,6,23,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Symptoms />
        <Prevention />
        <Diagnosis />
        <Resources />
      </main>
      <footer className="border-t border-slate-200/60 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Malaria Aware — Empowering communities with timely information.</p>
          <a href="/test" className="text-emerald-700 hover:underline">System check</a>
        </div>
      </footer>
    </div>
  )
}
