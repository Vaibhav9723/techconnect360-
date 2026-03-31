import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  BarChart3,
  Code2,
  LineChart,
  Megaphone,
  Globe,
  Share2,
  Palette,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const serviceGroups = [
  {
    group: "Core Solutions",
    desc: "Powerful business software to streamline operations and drive growth.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    services: [
      {
        icon: <BarChart3 className="w-7 h-7 text-primary" />,
        title: "POS System",
        subtitle: "Billing360 — built for your business type",
        desc: "Our flagship Billing360 POS is tailored for street vendors, restaurants, and more. Fast billing, inventory tracking, and sales reports out of the box.",
        features: ["Fast checkout (under 3 seconds)", "Offline mode", "GST & tax reports", "Inventory alerts"],
        href: "/pos",
      },
      {
        icon: <Users className="w-7 h-7 text-primary" />,
        title: "CRM System",
        subtitle: "Manage customers and leads smarter",
        desc: "Stop using spreadsheets. We build customized CRM platforms tailored to your sales pipeline, increasing retention and conversion.",
        features: ["Custom lead pipelines", "Automated workflows", "Customer history tracking", "3rd-party integrations"],
        href: "/crm",
      },
      {
        icon: <Code2 className="w-7 h-7 text-primary" />,
        title: "Software Development",
        subtitle: "Custom apps for your exact workflow",
        desc: "We build web and mobile applications using modern stacks — React, Node.js, and more — engineered to scale with your business.",
        features: ["Web & mobile apps", "API integrations", "Cloud deployment", "Ongoing maintenance"],
        href: "/contact",
      },
    ],
  },
  {
    group: "Digital Services",
    desc: "Online presence and marketing that actually drives results.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    services: [
      {
        icon: <Globe className="w-7 h-7 text-accent" />,
        title: "Website / App Development",
        subtitle: "Your 24/7 digital storefront",
        desc: "Responsive, lightning-fast websites and apps. Mobile-first, SEO-optimized, and built to convert visitors into loyal customers.",
        features: ["Responsive mobile-first", "SEO optimization", "E-commerce integration", "CMS implementation"],
        href: "/contact",
      },
      {
        icon: <Megaphone className="w-7 h-7 text-accent" />,
        title: "Digital Marketing",
        subtitle: "Get seen by the right people",
        desc: "Data-driven campaigns across Google, Meta, and search to maximize your ROI. We run campaigns that bring real, measurable results.",
        features: ["Google Ads & Meta Ads", "Technical SEO audits", "Email marketing", "Conversion optimization"],
        href: "/contact",
      },
      {
        icon: <Share2 className="w-7 h-7 text-accent" />,
        title: "Social Media Management",
        subtitle: "Consistent brand voice, every day",
        desc: "We manage your social media presence — content creation, scheduling, community engagement — so you can focus on running your business.",
        features: ["Content calendar", "Post design & copywriting", "Comment management", "Monthly analytics reports"],
        href: "/social-media",
      },
    ],
  },
  {
    group: "Branding",
    desc: "Build a brand that people remember and trust.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    services: [
      {
        icon: <Palette className="w-7 h-7 text-secondary" />,
        title: "Logo Design",
        subtitle: "A logo that stands the test of time",
        desc: "We craft professional logos that represent your brand perfectly — memorable, versatile, and uniquely yours.",
        features: ["Multiple concepts", "Vector files (SVG/PDF)", "Multiple revisions", "Full ownership"],
        href: "/contact",
      },
      {
        icon: <LineChart className="w-7 h-7 text-secondary" />,
        title: "Brand Strategy & Identity",
        subtitle: "Full brand guidelines and visual identity",
        desc: "Complete brand identity: colors, typography, tone of voice, and marketing collateral to keep your brand consistent across all channels.",
        features: ["Brand guidelines doc", "Color & typography system", "Business card & stationery", "Social media kit"],
        href: "/contact",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <section className="pb-14 bg-secondary text-white rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/30"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10 pt-12">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 mb-4 backdrop-blur-md">What We Offer</span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-white">Our Services</h1>
            <p className="text-lg text-white/75 leading-relaxed">
              From software to marketing and branding — everything your business needs, under one roof.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grouped Services */}
      <div className="py-16 space-y-20">
        {serviceGroups.map((group, gi) => (
          <section key={gi} className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${group.bgColor} ${group.color} ${group.borderColor} border`}>
                    {group.group}
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">{group.desc}</p>
                </div>
                <div className="flex-1 h-px bg-border hidden sm:block" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.services.map((service, si) => (
                <FadeIn key={si} delay={si * 0.08}>
                  <div className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl ${group.bgColor} flex items-center justify-center mb-5`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-display font-bold mb-1">{service.title}</h3>
                    <p className={`text-sm font-medium mb-3 ${group.color}`}>{service.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link href={service.href}>
                      <Button variant="outline" className="w-full rounded-xl group text-sm">
                        {service.href === "/pos" ? "View POS Details"
                          : service.href === "/crm" ? "View CRM Details"
                          : service.href === "/social-media" ? "View Packages"
                          : "Get Started"}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="bg-secondary rounded-2xl px-8 py-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Ready to scale your business?</h2>
              <p className="text-secondary-foreground/70 mb-6 max-w-xl mx-auto">Let's combine our expertise with your vision to build something exceptional.</p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-white text-secondary hover:bg-white/90">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
