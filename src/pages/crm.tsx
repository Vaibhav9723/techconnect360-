import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  BarChart2,
  Bell,
  Settings,
  Layers,
  PhoneCall,
  GitMerge,
} from "lucide-react";

const plans = [
  {
    name: "Basic CRM",
    subtitle: "For small teams getting started",
    icon: <Users className="w-8 h-8" />,
    status: "available",
    desc: "Manage your contacts and leads in one place. No spreadsheets, no chaos — just clean, simple customer tracking.",
    features: [
      "Contact & lead management",
      "Follow-up reminders",
      "Basic sales pipeline",
      "Email activity tracking",
      "Dashboard reports",
    ],
  },
  {
    name: "Sales CRM",
    subtitle: "For growing sales teams",
    icon: <BarChart2 className="w-8 h-8" />,
    status: "available",
    desc: "Advanced pipeline management with automation tools. Close more deals faster with smart workflows and real-time tracking.",
    features: [
      "Visual sales pipeline (Kanban)",
      "Automated follow-up workflows",
      "Deal stage tracking",
      "Team collaboration tools",
      "Custom fields & tags",
      "Performance analytics",
    ],
  },
  {
    name: "Custom CRM",
    subtitle: "Built exactly for your business",
    icon: <Settings className="w-8 h-8" />,
    status: "available",
    desc: "We build a CRM from scratch tailored to your exact workflow — your industry, your process, your rules.",
    features: [
      "Fully custom modules",
      "3rd-party integrations (WhatsApp, Email, etc.)",
      "Role-based access control",
      "API connectivity",
      "Custom reports & exports",
      "Dedicated support",
    ],
  },
];

const whyFeatures = [
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    title: "Never Miss a Follow-up",
    desc: "Automated reminders and alerts so no lead slips through the cracks.",
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "All Customer Data in One Place",
    desc: "Call logs, emails, notes, and deal history — everything on a single screen.",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-primary" />,
    title: "Stay Connected",
    desc: "Integrated with WhatsApp, email, and calling tools your team already uses.",
  },
  {
    icon: <GitMerge className="w-6 h-6 text-primary" />,
    title: "Connects With Your Tools",
    desc: "Plug into your existing software — ERP, accounting, or marketing tools.",
  },
];

export default function CRMPage() {
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
              <Users className="w-4 h-4 text-accent fill-accent" />
              CRM System
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-5 leading-tight">
              Stop Losing Leads.<br />
              <span className="text-primary">Start Closing Deals.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              Our CRM solutions are built for businesses that want to manage customers smarter — not harder. From basic contact tracking to fully custom pipelines.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-12 px-8">
                Get Your CRM Built
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Choose Your CRM Plan</h2>
              <p className="text-muted-foreground">From simple contact management to fully customized platforms — we build CRMs for how you actually work.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                      {plan.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">
                      ✓ Available
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display mb-1">{plan.name}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{plan.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{plan.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button variant="outline" className="w-full rounded-xl group">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Why Businesses Choose Our CRM</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">We don't just give you software — we build a system around how your team actually works.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFeatures.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-background rounded-2xl p-6 border border-border/60 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="bg-secondary rounded-2xl px-8 py-10 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Ready to build your CRM?</h2>
                <p className="text-secondary-foreground/70 mb-6">Talk to us and we'll design the right system for your business from day one.</p>
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
