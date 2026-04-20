import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart3, Code2, LineChart, Megaphone, Smartphone, Star, Users, Globe, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";

const serviceGroups = [
  {
    group: "POS System",
    hexColor: "#3f318c",
    items: [
      { Icon: BarChart3, title: "Fast Billing", desc: "Generate bills in seconds for shops, vendors, restaurants — any business type.", href: "/pos", iconColor: "#3f318c" },
      { Icon: Smartphone, title: "Inventory Tracking", desc: "Real-time stock alerts and product management — all in one screen.", href: "/pos", iconColor: "#9b5468" },
      { Icon: Code2, title: "Offline Mode", desc: "Works without internet and syncs automatically when you're back online.", href: "/pos", iconColor: "#a55863" },
    ]
  },
  {
    group: "Social Media Handling",
    hexColor: "#ee7c27",
    items: [
      { Icon: Share2, title: "Content Creation", desc: "Engaging posts, reels, and stories crafted to grow your brand.", href: "/social-media", iconColor: "#ee7c27" },
      { Icon: Megaphone, title: "Platform Management", desc: "Consistent presence across Instagram, Facebook, LinkedIn and more.", href: "/social-media", iconColor: "#c5684d" },
      { Icon: LineChart, title: "Analytics & Reports", desc: "Track reach, engagement, and audience growth with clear monthly reports.", href: "/social-media", iconColor: "#b35f5a" },
    ]
  },
  {
    group: "CRM System",
    hexColor: "#9b5468",
    items: [
      { Icon: Users, title: "Lead Management", desc: "Capture, track, and convert leads into loyal customers effortlessly.", href: "/services", iconColor: "#9b5468" },
      { Icon: Globe, title: "Customer Follow-ups", desc: "Automated reminders and full communication history for every client.", href: "/services", iconColor: "#a55863" },
      { Icon: BarChart3, title: "Sales Pipeline", desc: "Visualize your sales stages and close more deals, faster.", href: "/services", iconColor: "#b35f5a" },
    ]
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Transforming Businesses Daily
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6 text-balance">
                  Smart Digital Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modern Businesses</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-lg leading-relaxed">
                  We empower startups and enterprises with cutting-edge POS systems, custom CRM, web development, and result-driven digital marketing.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base">
                    View Services
                  </Button>
                </Link>
                <Link href="/pos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base bg-white/50 backdrop-blur-sm border-border hover:bg-white/80">
                    Explore POS System
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
            
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <FadeIn delay={0.2} direction="left" className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl transform rotate-6"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/h2.jpg`} 
                  alt="Abstract Digital Solutions" 
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl shadow-secondary/10 border border-white/50"
                />
                
                {/* Floating UI Elements for depth */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 z-20 bg-card p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4 pr-8"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Sales Today</p>
                    <p className="text-xl font-bold font-display">+24.5%</p>
                  </div>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">What We Do</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Everything your business needs to grow</h3>
              <p className="text-muted-foreground">From software to marketing — we've got you covered end to end.</p>
            </FadeIn>
          </div>

          <div className="space-y-10">
            {serviceGroups.map((group, gi) => (
              <FadeIn key={gi} delay={gi * 0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${group.hexColor}18`, color: group.hexColor }}
                    >{group.group}</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {group.items.map((item, ii) => (
                      <Link key={ii} href={item.href}>
                        <div className="bg-background rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group h-full">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: `${item.iconColor}18` }}
                          >
                            <item.Icon className="w-6 h-6" style={{ color: item.iconColor }} />
                          </div>
                          <h4 className="text-base font-bold mb-2 transition-colors" style={{ ['--hover-color' as string]: group.hexColor }}>{item.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-10 text-center">
            <Link href="/services">
              <Button variant="outline" className="rounded-full">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secondary rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background decorative */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-50"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-6 backdrop-blur-md">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    Featured Product
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    Billing360 <span style={{ color: '#ee7c27' }}>POS</span>
                  </h2>
                  <p className="text-lg text-secondary-foreground/80 mb-8 max-w-lg leading-relaxed">
                    One powerful POS system tailored for different business types — street vendors, restaurants, kirana shops, and more. Fast, reliable, and easy to use.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {['Generate bills in 3 seconds', 'Works completely offline', 'Inventory alerts & WhatsApp receipts'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: '#ee7c27' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/pos">
                    <Button size="lg" className="rounded-full bg-white text-secondary hover:bg-white/90">
                      View Details & Pricing
                    </Button>
                  </Link>
                </FadeIn>
              </div>
              
              <div className="relative">
                <FadeIn delay={0.2} direction="left">
                  {/* Mock UI for POS */}
                  <div className="bg-white rounded-2xl p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-[#F8FAFC] rounded-xl overflow-hidden border border-border h-80 flex flex-col">
                      <div className="bg-white border-b border-border p-4 flex justify-between items-center">
                        <div className="font-bold text-secondary">Checkout</div>
                        <div className="text-primary font-bold">₹210</div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col gap-3">
                        <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-border shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: '#ee7c2733' }}></div>
                            <div>
                              <p className="font-medium text-sm">Masala Chai</p>
                              <p className="text-xs text-muted-foreground">x 2</p>
                            </div>
                          </div>
                          <p className="font-medium">₹60</p>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-border shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-md"></div>
                            <div>
                              <p className="font-medium text-sm">Vada Pav Combo</p>
                              <p className="text-xs text-muted-foreground">x 3</p>
                            </div>
                          </div>
                          <p className="font-medium">₹150</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white border-t border-border">
                        <Button className="w-full">Charge ₹210</Button>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <img 
                  src={`${import.meta.env.BASE_URL}images/network-abstract.png`} 
                  alt="Connectivity" 
                  className="w-full rounded-[2rem] shadow-xl"
                />
              </FadeIn>
            </div>
            
            <div>
              <FadeIn>
                <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-3">Why Choose Us</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">A partner committed to your digital success</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  We don't just write code or run campaigns; we deeply understand your business objectives and engineer solutions that drive measurable growth.
                </p>
              </FadeIn>

              <div className="space-y-6">
                {[
                  { title: "End-to-End Solutions", desc: "From branding to robust custom software, we handle everything under one roof." },
                  { title: "Modern Tech Stack", desc: "We utilize the latest frameworks ensuring your apps are fast, secure, and scalable." },
                  { title: "Dedicated Support", desc: "Our team provides ongoing maintenance so your operations never skip a beat." }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * i} direction="left">
                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
