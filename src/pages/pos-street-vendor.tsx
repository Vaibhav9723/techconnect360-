import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  CheckCircle2,
  Zap,
  Package,
  FileText,
  TrendingUp,
  Play,
  ArrowRight,
  ArrowLeft,
  Store,
  Coffee,
  ShoppingBag,
} from "lucide-react";

export default function StreetVendorPOSPage() {
  return (
    <div className="bg-background pb-24">
      {/* Hero */}
      <section className="bg-secondary text-white pt-14 pb-20 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <Link href="/pos" className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to all POS variants
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-white font-medium text-sm mb-5 border border-primary/30">
              <Store className="w-4 h-4 text-primary" />
              Street Vendor POS — Billing360
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-5 leading-tight max-w-3xl">
              Built for the <span className="text-primary">Street.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              The StreetVendor POS is the fastest, lightest billing system designed for street vendors, food stalls, and mobile sellers. Works offline, starts in seconds, and never lets you down.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-12 px-8">
                  Get This POS System
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="#video">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                  <Play className="w-4 h-4 mr-2 fill-white" />
                  Watch Demo
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Who is it for?</h2>
              <p className="text-muted-foreground">Designed for the fast-paced world of street and small-format selling.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Store className="w-8 h-8 text-primary" />, title: "Street Vendors", desc: "Battery-friendly offline mode for food stalls and hawkers." },
              { icon: <Coffee className="w-8 h-8 text-accent" />, title: "Small Cafes", desc: "Quick order entry and table tracking for tiny cafes." },
              { icon: <ShoppingBag className="w-8 h-8 text-primary" />, title: "Pop-up Shops", desc: "Setup in minutes, scan barcodes, collect payments anywhere." },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="bg-white rounded-2xl p-7 border border-border/50 shadow-sm text-center flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-5">{item.icon}</div>
                  <h3 className="text-lg font-bold font-display mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Everything you need, nothing you don't</h2>
                <p className="text-muted-foreground mb-8">We stripped away enterprise clutter and kept only what matters for fast street selling.</p>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { icon: <Zap className="w-5 h-5 text-primary" />, title: "Fast Billing", desc: "Complete a sale in under 3 seconds." },
                  { icon: <Package className="w-5 h-5 text-accent" />, title: "Inventory Tracking", desc: "Real-time stock with low-stock alerts." },
                  { icon: <FileText className="w-5 h-5 text-primary" />, title: "GST Support", desc: "Auto tax calculation & compliance reports." },
                  { icon: <TrendingUp className="w-5 h-5 text-accent" />, title: "Sales Reports", desc: "End-of-day analytics on your dashboard." },
                ].map((f, i) => (
                  <FadeIn key={i} delay={0.08 * i} direction="left">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0">
                        {f.icon}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{f.title}</h4>
                        <p className="text-muted-foreground text-sm">{f.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <FadeIn direction="right">
              <div className="bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl p-8 border border-border/30">
                <div className="bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden">
                  <div className="bg-secondary p-4 text-white font-bold flex justify-between">
                    <span className="font-display">Checkout</span>
                    <span>₹142.00</span>
                  </div>
                  <div className="p-5 space-y-3">
                    {[
                      { name: "Vada Pav x2", price: "₹40" },
                      { name: "Chai x3", price: "₹60" },
                      { name: "Samosa x2", price: "₹42" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center bg-muted/50 px-4 py-3 rounded-lg">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-sm font-bold">{item.price}</span>
                      </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" className="flex-1 text-sm">Print</Button>
                      <Button className="flex-1 text-sm">Charge ₹142</Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-background" id="video">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Watch How It Works</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">See the Street Vendor POS in action — simple, fast, and built for real vendors.</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-secondary aspect-video flex items-center justify-center relative group cursor-pointer">
              <div className="absolute inset-0 bg-secondary/80 flex flex-col items-center justify-center z-10 transition-colors group-hover:bg-secondary/60 text-white text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <p className="text-base font-semibold">🎬 Video Placeholder</p>
                <p className="text-sm text-secondary-foreground/60 mt-2">Replace with your Cloudinary or YouTube embed URL</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-10 text-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-12 px-8 shadow-md">
                Get This POS System
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
