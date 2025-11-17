import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Symptoms, Prevention, Diagnosis, Resources } from './components/Sections'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Symptoms />
        <Prevention />
        <Diagnosis />
        <Resources />
      </main>
      <footer className="border-t border-slate-200 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Malaria Aware — Empowering communities with timely information.</p>
          <a href="/test" className="text-emerald-700 hover:underline">System check</a>
        </div>
      </footer>
    </div>
  )
}
