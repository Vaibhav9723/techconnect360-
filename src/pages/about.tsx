import { FadeIn } from "@/components/ui/FadeIn";
import { Users, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <section className="pb-14 bg-secondary text-white rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 mb-4 backdrop-blur-md">Who We Are</span>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-white">About TechConnect360°</h1>
              <p className="text-lg text-white/75 leading-relaxed">
                A team of passionate technologists dedicated to transforming how businesses operate in the digital age.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl font-display font-bold mb-6">Why We Exist</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  TechConnect360° was founded on a simple observation: small to medium businesses were being left behind in the digital revolution due to complex, enterprise-level tools that were too expensive and hard to use.
                </p>
                <p>
                  We exist to bridge that gap. We build clean, intuitive, and powerful software solutions—like our flagship StreetVendor POS—that empower business owners to focus on what they do best, while we handle the technology.
                </p>
                <p>
                  Our holistic approach means we don't just write code; we partner with you to provide 360-degree digital solutions spanning software, marketing, and branding.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                {/* team working abstract image */}
                <img 
                  src={`${import.meta.env.BASE_URL}images/network-abstract.png`} 
                  alt="TechConnect360 Vision" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border hidden md:block">
                <div className="text-4xl font-display font-bold text-primary mb-1">100+</div>
                <div className="text-sm font-medium text-secondary">Businesses Empowered</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-secondary text-white rounded-3xl mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl px-4 md:px-12 my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <FadeIn>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-secondary-foreground/80 leading-relaxed text-lg">
                To democratize access to powerful digital tools. We strive to deliver high-quality, scalable, and intuitive technology solutions that drive tangible growth for businesses of all sizes.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm h-full">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-secondary-foreground/80 leading-relaxed text-lg">
                To be the leading global partner for business transformation, recognized for our innovative products, uncompromising quality, and dedication to our clients' success.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Simplicity", desc: "Complex problems require elegant, simple solutions. We eliminate friction." },
              { title: "Innovation", desc: "We constantly explore new technologies to keep you ahead of the curve." },
              { title: "Partnership", desc: "Your success is our success. We build relationships, not just software." }
            ].map((value, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-white p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-muted mx-auto flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
