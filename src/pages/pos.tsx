import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Zap,
  ArrowRight,
  Store,
  UtensilsCrossed,
  ShoppingBasket,
  Leaf,
  Wrench,
  Lock,
  WifiOff,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const variants = [
  {
    id: "street-vendor",
    icon: <Store className="w-8 h-8" />,
    name: "Street Vendor POS",
    desc: "Built for street vendors and food stalls. Fast billing, offline mode, and simple inventory — no training needed.",
    status: "available",
    href: "/pos/street-vendor",
  },
  {
    id: "restaurant",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    name: "Restaurant POS",
    desc: "Table management, kitchen order display, and quick modifiers for cafes and small restaurants.",
    status: "available",
    href: "/pos/restaurant",
  },
  {
    id: "kirana",
    icon: <ShoppingBasket className="w-8 h-8" />,
    name: "Kirana POS",
    desc: "Designed for neighborhood grocery stores with barcode scanning, credit tracking, and supplier management.",
    status: "coming-soon",
    href: null,
  },
  {
    id: "panwadi",
    icon: <Leaf className="w-8 h-8" />,
    name: "Panwadi POS",
    desc: "Ultra-simple billing for pan shops with fast item tap, daily summary, and cash management.",
    status: "coming-soon",
    href: null,
  },
  {
    id: "garage",
    icon: <Wrench className="w-8 h-8" />,
    name: "Garage POS",
    desc: "Job card management, parts inventory, and service billing for auto repair workshops.",
    status: "coming-soon",
    href: null,
  },
];

export default function POSPage() {
  return (
    <div className="bg-background pb-24">
      {/* Hero */}
      <section className="bg-secondary text-white pt-16 pb-20 rounded-b-[2.5rem] md:rounded-b-[3.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/30"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[60px]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-white font-medium text-sm mb-6 backdrop-blur-md border border-primary/30">
              <Zap className="w-4 h-4 text-accent fill-accent" />
              Billing360 POS System
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-5 leading-tight">
              One POS System.<br /><span className="text-primary">Many Business Types.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              Billing360 is our flagship POS platform tailored for different business types. Choose your variant and get a system built exactly for how you work.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-12 px-8">
                Get Billing360 POS
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Data Mode Section */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Choose How Your Data is Stored</h2>
              <p className="text-muted-foreground">Billing360 gives you full control — pick the mode that fits your business best.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Offline Mode */}
            <FadeIn delay={0}>
              <div className="rounded-2xl border-2 border-border bg-background p-8 flex flex-col gap-5 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <WifiOff className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-display font-bold">Offline Mode</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">Device-Only</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data is saved directly on your device. Works without internet — perfect for areas with poor connectivity or vendors who prefer keeping data local.
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Works without any internet connection",
                    "All data stored securely on your device",
                    "Fastest performance — zero latency",
                    "No subscription required for data storage",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground border-t border-border pt-4">
                  ⚠️ Data is tied to the device. If the device is lost, data cannot be recovered unless manually backed up.
                </p>
              </div>
            </FadeIn>

            {/* Online Mode */}
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 flex flex-col gap-5 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary text-white">Recommended</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Cloud className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-display font-bold">Online Mode</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary">Cloud Storage</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data is stored securely in the cloud. Log in from any device — phone, tablet, or desktop — and access all your sales, inventory, and reports instantly.
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Access data from any device, anywhere",
                    "Automatic cloud backup — never lose data",
                    "Multi-device & multi-user support",
                    "Real-time sync across all devices",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground border-t border-border pt-4">
                  ✅ Requires internet for initial sync. Data is always safe — even if your device is lost or changed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Variants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Choose Your POS Variant</h2>
              <p className="text-muted-foreground">Each variant is purpose-built for its industry — not a one-size-fits-all solution.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((v, i) => (
              <FadeIn key={v.id} delay={i * 0.08}>
                <div className={`bg-white rounded-2xl p-7 border border-border/60 shadow-sm flex flex-col h-full transition-all duration-300 ${v.status === "available" ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer" : "opacity-80"}`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${v.status === "available" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {v.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${v.status === "available" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {v.status === "available" ? "✓ Available" : "Coming Soon"}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display mb-2">{v.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{v.desc}</p>

                  {v.status === "available" && v.href ? (
                    <Link href={v.href}>
                      <Button variant="outline" className="w-full rounded-xl group">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="w-full rounded-xl opacity-50 cursor-not-allowed" disabled>
                      <Lock className="mr-2 w-4 h-4" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="bg-secondary rounded-2xl px-8 py-10 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Not sure which variant fits you?</h2>
                <p className="text-secondary-foreground/70 mb-6">Talk to us — we'll help you pick the right POS for your business.</p>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full bg-white text-secondary hover:bg-white/90">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
