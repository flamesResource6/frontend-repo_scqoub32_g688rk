export function Symptoms() {
  const items = [
    { title: "Fever and chills", desc: "Often cyclical fevers with intense chills and sweating." },
    { title: "Headache & fatigue", desc: "General malaise, body aches, and weakness." },
    { title: "Nausea or vomiting", desc: "Digestive discomfort can occur in many cases." },
  ];
  return (
    <section id="symptoms" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Common symptoms</h2>
      <p className="mt-2 text-slate-600">If you experience these after travel to or in a malaria region, seek testing promptly.</p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-800">{it.title}</h3>
            <p className="text-slate-600 mt-2 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Prevention() {
  const steps = [
    { title: "Use insecticide-treated nets", desc: "Sleep under LLINs to reduce bites at night." },
    { title: "Apply repellents", desc: "Use DEET or picaridin-based repellents on exposed skin." },
    { title: "Eliminate standing water", desc: "Reduce mosquito breeding sites around homes." },
    { title: "Prophylaxis when traveling", desc: "Consult healthcare providers for antimalarial medicines." },
  ];
  return (
    <section id="prevention" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Prevention</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-800">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-emerald-300/60 bg-emerald-50 aspect-[4/3]" />
      </div>
    </section>
  );
}

export function Diagnosis() {
  return (
    <section id="diagnosis" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Diagnosis and testing</h2>
      <p className="mt-2 text-slate-600">Rapid diagnostic tests (RDTs) and microscopy are standard. Seek care immediately if you suspect malaria.</p>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li>Find the nearest clinic or community health worker.</li>
          <li>Get tested within 24 hours of fever onset.</li>
          <li>Follow prescribed treatment completely, even if you feel better.</li>
        </ul>
      </div>
    </section>
  );
}

export function Resources() {
  const links = [
    { label: "WHO Malaria", href: "https://www.who.int/teams/global-malaria-programme" },
    { label: "CDC Malaria", href: "https://www.cdc.gov/malaria/" },
    { label: "RBM Partnership", href: "https://endmalaria.org/" },
  ];
  return (
    <section id="resources" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Resources</h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 bg-white p-5 hover:border-emerald-400 hover:shadow transition">
            <span className="font-medium text-emerald-700">{l.label}</span>
            <p className="text-slate-600 text-sm mt-2">External resource</p>
          </a>
        ))}
      </div>
    </section>
  );
}
