import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Malaria Aware" className="h-8 w-8" onError={(e)=>{e.currentTarget.style.display='none'}} />
          <span className="font-bold text-slate-800">Malaria Aware</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#symptoms" className="hover:text-emerald-600 transition">Symptoms</a>
          <a href="#prevention" className="hover:text-emerald-600 transition">Prevention</a>
          <a href="#diagnosis" className="hover:text-emerald-600 transition">Diagnosis</a>
          <a href="#resources" className="hover:text-emerald-600 transition">Resources</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-slate-100" onClick={()=>setOpen(!open)} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#symptoms" className="hover:text-emerald-600" onClick={()=>setOpen(false)}>Symptoms</a>
            <a href="#prevention" className="hover:text-emerald-600" onClick={()=>setOpen(false)}>Prevention</a>
            <a href="#diagnosis" className="hover:text-emerald-600" onClick={()=>setOpen(false)}>Diagnosis</a>
            <a href="#resources" className="hover:text-emerald-600" onClick={()=>setOpen(false)}>Resources</a>
          </div>
        </div>
      )}
    </header>
  );
}
