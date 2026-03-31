import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Share2,
  ArrowRight,
  CheckCircle2,
  Image,
  Calendar,
  TrendingUp,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    name: "Starter",
    subtitle: "Perfect for new or small businesses",
    icon: <Share2 className="w-8 h-8" />,
    desc: "Get your social media presence off the ground with consistent posting and basic engagement on 2 platforms.",
    features: [
      "2 platforms (Instagram + Facebook)",
      "12 posts per month",
      "Basic post design & captions",
      "Monthly performance report",
      "Content calendar",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    subtitle: "For businesses ready to scale",
    icon: <TrendingUp className="w-8 h-8" />,
    desc: "More content, more reach, more engagement. Includes reels, stories, and targeted community management.",
    features: [
      "3 platforms (Instagram + Facebook + LinkedIn)",
      "20 posts + 8 reels/stories per month",
      "Professional graphic design",
      "Community management (comments & DMs)",
      "Bi-weekly performance reports",
      "Hashtag & SEO strategy",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    subtitle: "Full-service social media partner",
    icon: <Sparkles className="w-8 h-8" />,
    desc: "Your complete social media department. We handle strategy, content, engagement, and paid ad management.",
    features: [
      "All platforms (Instagram, Facebook, LinkedIn, YouTube, X)",
      "Unlimited posts & reels",
      "Brand photography & video editing",
      "Full community management",
      "Paid ads management (Meta & Google)",
      "Weekly strategy calls",
      "Competitor analysis",
    ],
    highlight: false,
  },
];

const whatWeDo = [
  {
    icon: <Image className="w-6 h-6 text-accent" />,
    title: "Content Creation",
    desc: "Eye-catching graphics, reels, stories, and copywriting — all aligned with your brand.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-accent" />,
    title: "Content Scheduling",
    desc: "We plan and schedule posts at peak engagement times so your audience always sees your content.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-accent" />,
    title: "Community Management",
    desc: "We respond to comments and DMs so your followers feel heard and your brand stays active.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-accent" />,
    title: "Analytics & Reports",
    desc: "Clear monthly reports showing what's working — reach, engagement, follower growth, and more.",
  },
];

export default function SocialMediaPage() {
  return (
    <div className="bg-background pb-24">
      {/* Hero */}
      <section className="bg-secondary text-white pt-16 pb-20 rounded-b-[2.5rem] md:rounded-b-[3.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-accent/20"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-white font-medium text-sm mb-6 backdrop-blur-md border border-accent/30">
              <Share2 className="w-4 h-4 text-accent" />
              Social Media Management
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-5 leading-tight">
              Your Brand,<br />
              <span className="text-accent">Every Day. Everywhere.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              We manage your social media from start to finish — content creation, posting, engagement, and reporting — so you can focus on running your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white">
                Start Growing Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">What We Handle for You</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Everything from idea to post to analytics — we take care of it all.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-background rounded-2xl p-6 border border-border/60 text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
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

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Choose Your Package</h2>
              <p className="text-muted-foreground">Whether you're just starting out or ready to dominate your niche — we have a plan for you.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`rounded-2xl p-7 border flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.highlight ? "bg-secondary text-white border-primary shadow-lg" : "bg-white border-border/60 shadow-sm"}`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${pkg.highlight ? "bg-white/10 text-white" : "bg-accent/10 text-accent"}`}>
                      {pkg.icon}
                    </div>
                    {pkg.highlight && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent text-white">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl font-bold font-display mb-1 ${pkg.highlight ? "text-white" : ""}`}>{pkg.name}</h3>
                  <p className={`text-sm font-medium mb-3 ${pkg.highlight ? "text-white/70" : "text-accent"}`}>{pkg.subtitle}</p>
                  <p className={`text-sm leading-relaxed mb-5 flex-1 ${pkg.highlight ? "text-white/70" : "text-muted-foreground"}`}>{pkg.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className={`flex items-center gap-2 text-sm ${pkg.highlight ? "text-white/90" : "text-secondary"}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.highlight ? "text-accent" : "text-accent"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      variant={pkg.highlight ? "default" : "outline"}
                      className={`w-full rounded-xl group ${pkg.highlight ? "bg-accent hover:bg-accent/90 text-white border-0" : ""}`}
                    >
                      Get This Package
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Not sure which package is right?</h2>
                <p className="text-secondary-foreground/70 mb-6">Let's talk — we'll recommend the best plan for your business goals and budget.</p>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full bg-white text-secondary hover:bg-white/90">
                    Talk to Us
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
