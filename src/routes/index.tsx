import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import hero from "@/assets/hero-embroidery.jpg";
import stillLife from "@/assets/collection-still-life.jpg";
import artisan from "@/assets/artisan-hands.jpg";
import flatlay from "@/assets/products-flatlay.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "NaqshKari — Handcrafted Stories, Stitched with Soul" },
    { name: "description", content: "Discover premium handmade cross-stitch, embroidery, décor and gifts created slowly and beautifully in India." },
    { property: "og:title", content: "NaqshKari — Handcrafted Stories, Stitched with Soul" },
    { property: "og:description", content: "Premium handmade embroidery, cross-stitch art and thoughtful gifts." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Home });

const collections = ["Cross-Stitch Art", "Embroidery", "Home Décor", "Personalized Gifts", "Festive Collection", "Custom Creations"];
const products = [
  ["Pomegranate Reverie", "Hand-embroidered hoop art", "₹2,450", "35% 28% / 36% 34%"],
  ["Ivory Jasmine", "Botanical threadwork on linen", "₹2,150", "68% 25% / 30% 34%"],
  ["Olive Branch Study", "Heritage cross-stitch artwork", "₹2,850", "70% 67% / 30% 33%"],
  ["Marigold Keepsake", "Personalized drawstring pouch", "₹1,650", "28% 67% / 36% 30%"],
] as const;

function Home() {
  return <SiteShell>
    <section className="grid min-h-[calc(100svh-110px)] lg:grid-cols-[.88fr_1.12fr]">
      <div className="order-2 flex items-center px-6 py-16 md:px-14 lg:order-1 lg:px-[9vw]"><div className="reveal-up max-w-xl"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-primary">A celebration of slow craft</p><h1 className="mt-5 text-6xl leading-[.9] md:text-7xl xl:text-[6.5rem]">Handcrafted Stories,<br/><em className="font-normal text-primary">Stitched with Soul.</em></h1><p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground">Discover exquisite handmade cross-stitch and embroidery pieces, thoughtfully created to bring warmth, artistry, and timeless beauty into your space.</p><div className="mt-9 flex flex-wrap gap-3"><Link to="/shop" className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[.15em] text-primary-foreground transition-transform hover:-translate-y-0.5">Shop collection <ArrowRight size={15}/></Link><Link to="/about" className="inline-flex items-center border border-foreground px-7 py-4 text-xs font-bold uppercase tracking-[.15em] transition-colors hover:bg-foreground hover:text-primary-foreground">Explore our craft</Link></div></div></div>
      <div className="order-1 relative min-h-[62vh] overflow-hidden lg:order-2 lg:min-h-full"><img src={hero} alt="Artisan embroidering a floral motif by hand" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute bottom-6 left-6 bg-background/90 px-4 py-3 backdrop-blur"><p className="text-[10px] font-bold uppercase tracking-[.2em]">Every piece, made by hand</p></div></div>
    </section>

    <section className="px-6 py-24 lg:px-10"><div className="mx-auto max-w-[1400px]"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.28em] text-primary">Curated with care</p><h2 className="mt-3 text-5xl md:text-6xl">Explore our collections</h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground">From quiet botanical studies to one-of-a-kind keepsakes, each collection honours the beauty of the handmade.</p></div><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{collections.map((name,i) => <Link key={name} to="/shop" className="group relative aspect-[4/5] overflow-hidden bg-card"><img src={i%2 ? flatlay : stillLife} loading="lazy" width={i%2 ? 1536 : 1024} height={i%2 ? 1024 : 1280} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{objectPosition: `${20 + (i%3)*25}% center`}}/><div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground"><p className="font-display text-3xl">{name}</p><span className="mt-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em]">Explore collection <ArrowRight size={13}/></span></div></Link>)}</div></div></section>

    <section className="bg-card px-6 py-24 lg:px-10"><div className="mx-auto max-w-[1400px]"><div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[.28em] text-primary">Loved, gifted, treasured</p><h2 className="mt-3 text-5xl md:text-6xl">Bestsellers from the studio</h2></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.map((p,i) => <Product key={p[0]} item={p} index={i}/>)}</div><div className="mt-12 text-center"><Link to="/shop" className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-bold uppercase tracking-[.18em]">View all pieces <ArrowRight size={14}/></Link></div></div></section>

    <section className="grid lg:grid-cols-2"><div className="relative min-h-[650px]"><img src={artisan} loading="lazy" width={1024} height={1280} alt="NaqshKari artisan embroidering linen by hand" className="absolute inset-0 h-full w-full object-cover"/></div><div className="textile-grid flex items-center bg-surface px-7 py-20 md:px-20"><div className="max-w-xl"><p className="text-[10px] font-bold uppercase tracking-[.28em] text-primary">The NaqshKari story</p><h2 className="mt-4 text-6xl leading-[.95]">Made Slowly.<br/><em>Made Beautifully.</em></h2><p className="mt-7 text-sm leading-8 text-muted-foreground">At NaqshKari, every stitch carries a story. Our pieces are thoughtfully handcrafted with patience, precision, and love. We celebrate the beauty of slow craftsmanship and create pieces designed to be treasured for years.</p><Link to="/about" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-primary">Discover our story <ArrowRight size={15}/></Link></div></div></section>

    <section className="px-6 py-24 lg:px-10"><div className="mx-auto max-w-[1400px]"><div className="text-center"><Sparkles className="mx-auto text-gold" size={26}/><h2 className="mt-5 text-5xl">From inspiration to heirloom</h2></div><div className="mt-14 grid gap-10 md:grid-cols-4">{[["01","Inspired","Patterns, nature, culture and everyday beauty begin each design."],["02","Hand-Selected","Fine fabrics and thoughtful threads form every piece’s foundation."],["03","Handcrafted","Each stitch is patiently made with attention to every detail."],["04","Made to Treasure","A meaningful piece to display, gift and keep close."]].map(([n,t,d]) => <div key={n} className="border-t border-border pt-6"><span className="text-xs text-primary">{n}</span><h3 className="mt-5 text-3xl">{t}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{d}</p></div>)}</div></div></section>

    <section className="bg-primary px-6 py-24 text-primary-foreground"><div className="mx-auto max-w-4xl text-center"><p className="text-[10px] font-bold uppercase tracking-[.28em] text-primary-foreground/70">One of one, just like your story</p><h2 className="mt-4 text-6xl md:text-7xl">Made Especially for You.</h2><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-primary-foreground/75">Names, initials, meaningful dates, wedding keepsakes, nursery art or a piece imagined entirely by you — let’s bring your idea to life, stitch by stitch.</p><Link to="/custom-orders" className="mt-9 inline-flex items-center gap-3 bg-background px-7 py-4 text-xs font-bold uppercase tracking-[.15em] text-foreground">Request a custom piece <ArrowRight size={15}/></Link></div></section>
  </SiteShell>
}

function Product({ item, index }: { item: typeof products[number]; index: number }) {
  const [liked,setLiked]=useState(false); const [added,setAdded]=useState(false);
  return <article className="group"><div className="relative aspect-[4/5] overflow-hidden bg-muted"><img src={flatlay} loading="lazy" width={1536} height={1024} alt={item[0]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{objectPosition:item[3]}}/><button aria-label="Add to wishlist" onClick={()=>setLiked(!liked)} className="absolute right-3 top-3 bg-background/90 p-2.5"><Heart size={16} fill={liked ? "currentColor" : "none"}/></button><button onClick={()=>setAdded(true)} className="absolute inset-x-3 bottom-3 translate-y-16 bg-background py-3 text-[10px] font-bold uppercase tracking-[.16em] transition-transform group-hover:translate-y-0">{added ? "Added to bag" : "Add to bag"}</button></div><div className="mt-4 flex items-start justify-between gap-3"><div><h3 className="font-display text-2xl">{item[0]}</h3><p className="mt-1 text-xs text-muted-foreground">{item[1]}</p><div className="mt-2 flex items-center gap-1 text-gold"><Star size={11} fill="currentColor"/><Star size={11} fill="currentColor"/><Star size={11} fill="currentColor"/><Star size={11} fill="currentColor"/><Star size={11} fill="currentColor"/><span className="ml-1 text-[10px] text-muted-foreground">({18+index*7})</span></div></div><span className="shrink-0 text-sm font-semibold">{item[2]}</span></div></article>
}