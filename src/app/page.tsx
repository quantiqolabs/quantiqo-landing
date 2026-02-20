"use client";

import { useEffect, useRef } from "react";

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconBehance() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029L23.726 17zm-5.244-4c.035-1.325-.818-2.27-2.182-2.27-1.41 0-2.353.989-2.384 2.27h4.566zM9.607 12c0 1.856-.98 2.75-2.747 2.75H4.516V9.5H6.86c1.743 0 2.747.859 2.747 2.5zm-2.747-4H2V17h4.86C9.138 17 12 16.13 12 12c0-1.636-.67-2.728-1.755-3.316C11.087 8.039 11.5 7.183 11.5 6c0-2.714-2.202-4-4.493-4H2v2h4.86c1.353 0 2.14.553 2.14 1.75C9 7.153 8.326 7.72 7.114 7.865L9.607 8zm-3.091-.135V9.5h.245c.959 0 1.484.47 1.484 1.25 0 .815-.548 1.25-1.484 1.25H4v-4.135h2.516z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
function LogoIntentX() { return (<svg viewBox="0 0 120 28" fill="currentColor" className="h-5 w-auto"><text x="0" y="22" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="22" letterSpacing="2" fill="currentColor">INTENTX</text></svg>); }
function LogoCarbon() { return (<svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="3" fill="currentColor">CARBON</text></svg>); }
function LogoFenix() { return (<svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="2" fill="currentColor">FENIX</text></svg>); }
function LogoNest() { return (<svg viewBox="0 0 80 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="3" fill="currentColor">NEST</text></svg>); }
function LogoAccelera() { return (<svg viewBox="0 0 120 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="2" fill="currentColor">ACCELERA</text></svg>); }
function LogoLinus() { return (<svg viewBox="0 0 160 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="2" fill="currentColor">LINUSONLINEA</text></svg>); }
function LogoSozialens() { return (<svg viewBox="0 0 130 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="2" fill="currentColor">SOZIALENS</text></svg>); }

function QuantiqoLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="3" fill="none" />
      <ellipse cx="50" cy="50" rx="38" ry="17" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="5" fill="white" />
    </svg>
  );
}
function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 10%, rgba(68,182,216,0.07) 0%, transparent 60%), #03080C" }} />
      <svg className="absolute top-0 right-0 w-[55%] h-[65%] bg-line opacity-60" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin meet">
        <path d="M620 -20 Q580 120 480 200 Q380 280 250 240 Q160 215 80 280" stroke="rgba(68,182,216,0.55)" strokeWidth="1.5" fill="none" />
        <path d="M650 40 Q610 160 520 240 Q420 310 300 270 Q200 240 100 320" stroke="rgba(68,182,216,0.3)" strokeWidth="1" fill="none" />
        <path d="M580 -60 Q540 80 440 170 Q340 250 220 210 Q130 185 60 250" stroke="rgba(68,182,216,0.15)" strokeWidth="1" fill="none" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-line-2 opacity-40" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax meet">
        <path d="M-20 420 Q40 300 140 240 Q240 180 300 80" stroke="rgba(68,182,216,0.4)" strokeWidth="1.5" fill="none" />
        <path d="M-40 450 Q20 330 110 260 Q210 200 280 90" stroke="rgba(68,182,216,0.2)" strokeWidth="1" fill="none" />
      </svg>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(3,8,12,0.7) 100%)" }} />
    </div>
  );
}
function Orb() {
  return (
    <div className="relative flex items-center justify-center animate-orb-pulse orb-glow">
      <div className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full" style={{ background: "radial-gradient(ellipse 60% 55% at 35% 35%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 50% 50%, #1a2535 0%, #0a0f1a 40%, #03080C 75%, #03080C 100%)", boxShadow: "inset 0 0 60px rgba(0,0,0,0.8), 0 0 120px rgba(68,182,216,0.06), inset 0 30px 60px rgba(68,182,216,0.04)" }} />
      <div className="absolute w-[30%] h-[22%] rounded-full top-[18%] left-[22%]" style={{ background: "radial-gradient(ellipse, rgba(68,182,216,0.18) 0%, rgba(107,140,202,0.1) 50%, transparent 100%)", filter: "blur(8px)" }} />
      <div className="absolute w-[15%] h-[10%] rounded-full top-[55%] left-[30%]" style={{ background: "radial-gradient(ellipse, rgba(180,130,255,0.12) 0%, transparent 100%)", filter: "blur(6px)" }} />
      <div className="absolute bottom-[10%] w-[50%] h-[8%] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(68,182,216,0.08) 0%, transparent 100%)", filter: "blur(12px)" }} />
      <div className="absolute inset-[-12%] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, transparent 60%, rgba(68,182,216,0.04) 80%, transparent 100%)" }} />
    </div>
  );
}
const clients = [
  { name: "IntentX", logo: <LogoIntentX /> },
  { name: "Carbon", logo: <LogoCarbon /> },
  { name: "Fenix Finance", logo: <LogoFenix /> },
  { name: "Nest", logo: <LogoNest /> },
  { name: "Accelera", logo: <LogoAccelera /> },
  { name: "Linus", logo: <LogoLinus /> },
  { name: "Sozialens", logo: <LogoSozialens /> },
];

function ClientStrip() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #03080C, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #03080C, transparent)" }} />
      <div className="flex animate-marquee marquee-track">
        {[...clients, ...clients].map((client, i) => (
          <div key={i} className="flex items-center mx-8 md:mx-12 shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300">
            <span className="text-white">{client.logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      const orb = el.querySelector<HTMLElement>(".orb-container");
      if (orb) {
        orb.style.transform = `translate(${x}px, ${y}px)`;
        orb.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div ref={containerRef} className="grain-overlay relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden bg-[#03080C]">
      <Background />
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 lg:px-14 pt-6 md:pt-8">
        <a href="/" aria-label="Quantiqo Labs"><QuantiqoLogo size={36} /></a>
        <div className="flex items-center gap-5 text-white/60">
          <a href="https://twitter.com/quantiqolabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="X (Twitter)"><IconX /></a>
          <a href="https://www.behance.net/quantiqo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Behance"><IconBehance /></a>
          <a href="https://linkedin.com/company/quantiqolabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn"><IconLinkedIn /></a>
        </div>
      </nav>
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 -mt-8 md:-mt-12">
        <div className="orb-container mb-4 md:mb-6"><Orb /></div>
        <p className="opacity-0-init animate-fade-up text-[10px] md:text-[11px] tracking-[0.28em] text-white/45 uppercase mb-4 md:mb-5" style={{ animationFillMode: "forwards" }}>Web3 · DeFi · AI · Fintech · Founders · Startups</p>
        <h1 className="opacity-0-init animate-fade-up-delay-1 font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08] text-white max-w-[720px] tracking-[-0.02em]" style={{ animationFillMode: "forwards" }}>We Build the Infrastructure<br />Frontier Products Are Made Of</h1>
        <p className="opacity-0-init animate-fade-up-delay-2 mt-4 md:mt-5 text-[13px] md:text-[15px] text-white/50 tracking-[0.05em] font-light" style={{ animationFillMode: "forwards" }}>From 0 to launch.  No handoffs.  No excuses.</p>
        <div className="opacity-0-init animate-fade-up-delay-3 flex items-center gap-5 md:gap-7 mt-8 md:mt-10" style={{ animationFillMode: "forwards" }}>
          <a href="#book" className="btn-primary flex items-center gap-2 bg-white text-[#03080C] font-semibold text-[13px] tracking-[0.12em] uppercase px-6 py-3.5 rounded-full">
            <span>Let&apos;s Talk</span>
            <span className="flex items-center justify-center w-7 h-7 bg-[#03080C] text-white rounded-full"><ArrowUpRight /></span>
          </a>
          <a href="https://www.behance.net/quantiqo" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 text-white/75 font-medium text-[13px] tracking-[0.1em] uppercase">
            <span>Our Work</span><ArrowUpRight />
          </a>
        </div>
      </main>
      <footer className="opacity-0-init animate-fade-in-delay relative z-20 pb-5 md:pb-7" style={{ animationFillMode: "forwards" }}>
        <div className="w-full h-px bg-white/5 mb-5" />
        <ClientStrip />
        <p className="text-center text-[10px] text-white/20 tracking-[0.15em] mt-4 uppercase">2026 Copyright © Quantiqo Labs DMCC — All rights reserved.</p>
      </footer>
    </div>
  );
}
