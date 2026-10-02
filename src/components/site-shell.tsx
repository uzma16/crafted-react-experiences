import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/naqshkari-logo.png.asset.json";

const links = [
  ["Shop", "/shop"],
  ["Our Story", "/about"],
  ["Custom Orders", "/custom-orders"],
  ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen overflow-x-hidden bg-background">
    <div className="bg-foreground px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[.22em] text-primary-foreground">Complimentary shipping on orders over ₹3,500</div>
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2 lg:hidden"><Menu size={21}/></button>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.slice(0,2).map(([label,to]) => <Link key={to} to={to} className="text-[11px] font-semibold uppercase tracking-[.16em] transition-colors hover:text-primary">{label}</Link>)}
        </nav>
        <Link to="/" aria-label="NaqshKari home" className="absolute left-1/2 -translate-x-1/2">
          <img src={logoAsset.url} alt="NaqshKari" className="h-16 w-36 object-cover object-center" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.slice(2).map(([label,to]) => <Link key={to} to={to} className="text-[11px] font-semibold uppercase tracking-[.16em] transition-colors hover:text-primary">{label}</Link>)}
        </nav>
        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          {[Search, UserRound, Heart, ShoppingBag].map((Icon,i) => <button key={i} aria-label={["Search","Account","Wishlist","Shopping bag"][i]} className="p-2 transition-colors hover:text-primary"><Icon size={18}/></button>)}
        </div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-[60] bg-background p-6 lg:hidden"><button aria-label="Close menu" onClick={() => setOpen(false)} className="ml-auto block p-2"><X/></button><div className="mt-16 flex flex-col gap-8 text-center font-display text-4xl">{links.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}</div></div>}
    <main>{children}</main>
    <Footer />
  </div>
}

function Footer() {
  return <footer className="bg-foreground text-primary-foreground">
    <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
      <div><p className="font-display text-4xl">NaqshKari</p><p className="mt-3 max-w-sm text-sm leading-7 text-primary-foreground/70">Handcrafted stories, stitched with soul. Made slowly in India, to be treasured everywhere.</p></div>
      <div><p className="text-xs font-bold uppercase tracking-[.2em]">Explore</p><div className="mt-5 grid gap-3 text-sm text-primary-foreground/70">{links.map(([label,to]) => <Link key={to} to={to}>{label}</Link>)}</div></div>
      <div><p className="text-xs font-bold uppercase tracking-[.2em]">Letters from the studio</p><p className="mt-5 text-sm text-primary-foreground/70">New pieces, artisan stories and thoughtful gifting.</p><form className="mt-5 flex border-b border-primary-foreground/35"><input aria-label="Email address" type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-primary-foreground/45"/><button className="text-xs font-bold uppercase tracking-[.16em]">Join</button></form></div>
    </div>
    <div className="border-t border-primary-foreground/15 px-6 py-5 text-center text-[10px] uppercase tracking-[.16em] text-primary-foreground/50">© 2026 NaqshKari · Crafted with patience & heart</div>
  </footer>
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="border-b border-border bg-surface/40 px-6 py-20 text-center"><p className="text-[10px] font-bold uppercase tracking-[.28em] text-primary">{eyebrow}</p><h1 className="mx-auto mt-4 max-w-4xl text-5xl leading-none md:text-7xl">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">{children}</p></section>
}