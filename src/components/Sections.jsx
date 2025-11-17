import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export function Symptoms() {
  const items = [
    { title: "Fever and chills", desc: "Often cyclical fevers with intense chills and sweating." },
    { title: "Headache & fatigue", desc: "General malaise, body aches, and weakness." },
    { title: "Nausea or vomiting", desc: "Digestive discomfort can occur in many cases." },
  ];
  return (
    <section id="symptoms" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-slate-900">Common symptoms</motion.h2>
      <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="mt-2 text-slate-600">If you experience these after travel to or in a malaria region, seek testing promptly.</motion.p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm hover:shadow-md hover:border-emerald-300/70 transition"
          >
            <h3 className="font-semibold text-slate-800">{it.title}</h3>
            <p className="text-slate-600 mt-2 text-sm">{it.desc}</p>
          </motion.div>
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
    <section id="prevention" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-slate-900">Prevention</motion.h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-slate-200/70 bg-white p-5 hover:border-emerald-300/70 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-slate-800">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-emerald-300/60 bg-gradient-to-br from-emerald-50 to-white aspect-[4/3]"
        />
      </div>
    </section>
  );
}

export function Diagnosis() {
  return (
    <section id="diagnosis" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-slate-900">Diagnosis and testing</motion.h2>
      <motion.p {...fadeUp} transition={{ delay: 0.05, duration: 0.5 }} className="mt-2 text-slate-600">Rapid diagnostic tests (RDTs) and microscopy are standard. Seek care immediately if you suspect malaria.</motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-6 rounded-2xl border border-slate-200 bg-white p-6"
      >
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li>Find the nearest clinic or community health worker.</li>
          <li>Get tested within 24 hours of fever onset.</li>
          <li>Follow prescribed treatment completely, even if you feel better.</li>
        </ul>
      </motion.div>
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
    <section id="resources" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-slate-900">Resources</motion.h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-xl border border-slate-200/70 bg-white p-5 hover:border-emerald-400 hover:shadow-md transition"
          >
            <span className="font-medium text-emerald-700">{l.label}</span>
            <p className="text-slate-600 text-sm mt-2">External resource</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
