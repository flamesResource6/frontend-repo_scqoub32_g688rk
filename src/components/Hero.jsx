export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Protecting communities from malaria
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Learn the signs, prevent transmission, and find nearby testing options. Built to raise awareness and guide quick action.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#symptoms" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition">Learn Symptoms</a>
            <a href="#prevention" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-white transition">How to Prevent</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-emerald-200/40 border border-emerald-300/60 shadow-inner" />
          <p className="mt-3 text-sm text-slate-500">Community health visualization</p>
        </div>
      </div>
    </section>
  );
}
