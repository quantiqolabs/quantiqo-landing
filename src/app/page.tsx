"use client";

import { useEffect, useRef } from "react";

// ─── SVG Icons (Real Assets) ──────────────────────────────────────────────────

function IconX() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_x)">
        <mask id="mask0_x" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
          <path d="M0 0H21.6V21.6H0L0 0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_x)">
          <path d="M17.01 1.01172H20.3225L13.0865 9.30303L21.6 20.5875H14.9349L9.71074 13.7449L3.73989 20.5875H0.424286L8.16326 11.7161L0 1.01326H6.83486L11.5498 7.26646L17.01 1.01172ZM15.8451 18.6003H17.6811L5.832 2.89555H3.86331L15.8451 18.6003Z" fill="white"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_x">
          <rect width="21.6" height="21.6" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function IconBehance() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 5C8.81251 4.99995 9.60576 5.24734 10.2742 5.70924C10.9426 6.17114 11.4546 6.82565 11.7419 7.58567C12.0292 8.34569 12.0782 9.17518 11.8824 9.96375C11.6866 10.7523 11.2554 11.4626 10.646 12C11.2554 12.5374 11.6866 13.2477 11.8824 14.0362C12.0782 14.8248 12.0292 15.6543 11.7419 16.4143C11.4546 17.1744 10.9426 17.8289 10.2742 18.2908C9.60576 18.7527 8.81251 19.0001 8 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H8ZM17.5 9C20.107 9 22 11.368 22 14C22 14.2449 21.91 14.4813 21.7473 14.6644C21.5845 14.8474 21.3603 14.9643 21.117 14.993L21 15H15.14C15.498 16.224 16.493 17 17.5 17C18.58 17 19.192 16.489 19.74 15.85C19.9124 15.6484 20.1578 15.5236 20.4222 15.503C20.6866 15.4824 20.9484 15.5676 21.15 15.74C21.3516 15.9124 21.4764 16.1578 21.497 16.4222C21.5177 16.6866 21.4324 16.9484 21.26 17.15L21.153 17.272L20.924 17.518C20.202 18.26 19.146 19 17.5 19C14.893 19 13 16.632 13 14C13 11.368 14.893 9 17.5 9ZM8 13H4V17H8C8.51898 17.0023 9.01855 16.8028 9.39315 16.4436C9.76776 16.0844 9.98807 15.5937 10.0075 15.0751C10.027 14.5564 9.84412 14.0506 9.49751 13.6643C9.15089 13.278 8.6677 13.0416 8.15 13.005L8 13ZM17.5 11C16.493 11 15.498 11.776 15.14 13H19.86C19.502 11.776 18.507 11 17.5 11ZM8 7H4V11H8C8.53043 11 9.03914 10.7893 9.41421 10.4142C9.78929 10.0391 10 9.53043 10 9C10 8.46957 9.78929 7.96086 9.41421 7.58579C9.03914 7.21071 8.53043 7 8 7ZM19 6C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H16C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7C15 6.73478 15.1054 6.48043 15.2929 6.29289C15.4804 6.10536 15.7348 6 16 6H19Z" fill="white"/>
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5734 8.83319V10.7424C12.9732 10.1334 13.5243 9.6386 14.1728 9.3065C14.8212 8.9744 15.5447 8.81635 16.2726 8.84781C20.1596 8.84781 21 11.2779 21 14.4393V20.8757H17.3999V15.1694C17.3999 13.8081 17.1254 12.0576 15.0058 12.0576C12.9503 12.0576 12.5993 13.5392 12.5993 15.0682V20.8757H9.01041V8.83319H12.5734ZM6.59944 5.80682C6.599 6.16346 6.49328 6.51204 6.29555 6.80884C6.09781 7.10565 5.81685 7.33748 5.4879 7.47526C5.15908 7.61193 4.79704 7.64768 4.44784 7.57796C4.09864 7.50824 3.77808 7.33621 3.52695 7.08374C3.27535 6.83113 3.10406 6.50976 3.03462 6.16005C2.96518 5.81034 3.00069 5.4479 3.13668 5.11832C3.27268 4.78874 3.50308 4.50673 3.79893 4.30774C4.09477 4.10876 4.44284 4.00169 4.79937 4C5.03633 4 5.27096 4.04678 5.48979 4.13766C5.70863 4.22855 5.90737 4.36174 6.07461 4.52961C6.24185 4.69748 6.3743 4.89672 6.46436 5.11589C6.55443 5.33506 6.60033 5.56986 6.59944 5.80682Z" fill="white"/>
      <path d="M6.60014 8.84778H3V20.8756H6.60014V8.84778Z" fill="white"/>
    </svg>
  );
}
function QuantiqoLogo() {
  return (
    <svg width="40" height="36" viewBox="0 0 62 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.4344 3.57624C42.7624 1.19208 37.2385 0 31 0C24.7615 0 19.2376 1.19208 14.5656 3.57624C9.97606 5.90495 6.37589 9.20396 3.82004 13.3624C1.29167 17.5208 0 22.4277 0 28C0 33.5723 1.29167 38.5069 3.82004 42.6376C6.34841 46.796 9.97606 50.0673 14.5656 52.4238C19.2376 54.8079 24.7615 56 31 56C37.2385 56 42.7624 54.8079 47.4344 52.4238C52.0239 50.0951 55.6241 46.796 58.18 42.6376C60.7083 38.4792 62 33.5723 62 28C62 22.4277 60.7083 17.5208 58.18 13.3624C55.6516 9.20396 52.0239 5.93267 47.4344 3.57624ZM56.8608 33.5723C56.3387 36.2891 55.4042 38.7842 54.0576 41.002C51.8316 44.7446 48.6986 47.6554 44.7136 49.6515C40.8386 51.6198 36.1941 52.5901 30.9725 52.5901C25.7509 52.5901 21.1613 51.5921 17.2588 49.6515C13.2464 47.6554 10.086 44.7446 7.8874 41.002C6.56825 38.7564 5.60638 36.2614 5.08422 33.5168C4.78192 31.8812 5.82624 30.301 7.42021 29.9683C7.61259 29.9406 7.83243 29.9129 8.02481 29.9129C9.42641 29.9129 10.6631 30.9109 10.9654 32.297C11.3777 34.2376 12.0922 36.0396 13.0816 37.6752C14.7855 40.4475 17.1764 42.6376 20.2269 44.1901C23.305 45.7426 26.9051 46.5465 30.9725 46.5465C35.0399 46.5465 38.6675 45.7426 41.7181 44.1901C44.7686 42.6376 47.1596 40.4475 48.8635 37.6752C49.8528 36.0673 50.5674 34.2654 50.9796 32.3248C51.2819 30.9386 52.5186 29.9406 53.9202 29.9406C55.3218 29.9406 54.3325 29.9406 54.5248 29.996C56.1188 30.3287 57.1906 31.9089 56.8608 33.5446V33.5723ZM15.6649 28C15.6649 25.0891 16.297 22.6218 17.5612 20.4594C18.8528 18.297 20.6117 16.6614 22.9477 15.497C25.2287 14.3604 27.922 13.7782 31 13.7782C34.078 13.7782 36.7987 14.3604 39.0798 15.497C41.3883 16.6614 43.1472 18.297 44.4388 20.4594C45.703 22.5941 46.3351 25.1446 46.3351 28C46.3351 30.8554 45.703 33.4059 44.4388 35.5406C43.1472 37.703 41.3883 39.3386 39.0798 40.503C36.8262 41.6396 34.1055 42.2218 31 42.2218C27.8945 42.2218 25.2562 41.6673 22.9477 40.503C20.6117 39.3386 18.8528 37.703 17.5612 35.5406C16.2695 33.3782 15.6649 30.9109 15.6649 28ZM54.5248 25.9762C54.3325 26.004 54.1126 26.0317 53.9202 26.0317C52.5186 26.0317 51.2819 25.0337 50.9796 23.6475C50.5674 21.7069 49.8528 19.9049 48.8635 18.2693C47.1596 15.497 44.7686 13.3069 41.7181 11.7545C38.7225 10.2297 35.1773 9.42574 31.2199 9.39802C31.1374 9.39802 31.0275 9.39802 30.945 9.39802C30.8626 9.39802 30.7527 9.39802 30.6702 9.39802C26.7128 9.42574 23.195 10.2297 20.1995 11.7545C17.1489 13.3069 14.758 15.497 13.0541 18.2693C12.0647 19.8772 11.3502 21.6792 10.9379 23.6475C10.6356 25.0337 9.39893 26.0317 7.99733 26.0317C6.59574 26.0317 7.58511 26.0317 7.39274 25.9762C5.79877 25.6436 4.72696 24.0634 5.05674 22.4277C5.57891 19.7109 6.51329 17.1881 7.85992 14.9703C10.086 11.2277 13.219 8.31683 17.2314 6.32079C21.0514 4.40792 25.531 3.4099 30.5877 3.38218C30.6977 3.38218 30.8076 3.38218 30.9176 3.38218C31.0275 3.38218 31.1099 3.38218 31.2199 3.38218C36.359 3.4099 40.8661 4.40792 44.6862 6.32079C48.6711 8.31683 51.8041 11.2277 54.0301 14.9703C55.3493 17.2158 56.3112 19.7109 56.8333 22.4554C57.1356 24.0911 56.0913 25.6713 54.4973 26.004L54.5248 25.9762Z" fill="white"/>
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
function LogoIntentX() { return (<svg viewBox="0 0 120 28" fill="currentColor" className="h-5 w-auto"><text x="0" y="22" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="22" letterSpacing="2" fill="currentColor">INTENTX</text></svg>); }
function LogoCarbon() { return (<svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="3" fill="currentColor">CARBON</text></svg>); }
function LogoFenix() { return (<svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="2" fill="currentColor">FENIX</text></svg>); }
function LogoNest() { return (<svg viewBox="0 0 80 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="3" fill="currentColor">NEST</text></svg>); }
function LogoAccelera() { return (<svg viewBox="0 0 120 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="2" fill="currentColor">ACCELERA</text></svg>); }
function LogoLinus() { return (<svg viewBox="0 0 160 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="2" fill="currentColor">LINUSONLINEA</text></svg>); }
function LogoSozialens() { return (<svg viewBox="0 0 130 24" fill="currentColor" className="h-5 w-auto"><text x="0" y="19" fontFamily="Host Grotesk, sans-serif" fontWeight="300" fontSize="18" letterSpacing="2" fill="currentColor">SOZIALENS</text></svg>); }
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
        <a href="/" aria-label="Quantiqo Labs"><QuantiqoLogo /></a>
        <div className="flex items-center gap-5 text-white/60">
          <a href="https://twitter.com/quantiqolabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 opacity-60 hover:opacity-100" aria-label="X (Twitter)"><IconX /></a>
          <a href="https://www.behance.net/quantiqo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 opacity-60 hover:opacity-100" aria-label="Behance"><IconBehance /></a>
          <a href="https://linkedin.com/company/quantiqolabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 opacity-60 hover:opacity-100" aria-label="LinkedIn"><IconLinkedIn /></a>
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
