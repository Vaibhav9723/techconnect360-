import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioItems } from "@/data/portfolioData";

type MainCategory = "Software & POS" | "Web Design" | "Social Media";

const socialSubCategories = [
  "All",
  "Ads Videos",
  "Business Card Design",
  "Catalogue Design",
  "Festival Creatives",
  "Logo Design",
  "Logo Launching Video",
  "Marketing Videos",
  "Poster Designs",
  "Promotional Creatives",
  "Reels Coverpage Carousels",
  "Status Videos",
];

const mainCategories: MainCategory[] = [
  "Software & POS",
  "Web Design",
  "Social Media",
];

interface Project {
  id: number;
  title: string;
  category: MainCategory;
  subCategory?: string;
  desc: string;
  tags: string[];
  gradient: string;
  icon: string;
  link: string;
}

// const projects: Project[] = [
//   // Software & POS
//   {
//     id: 1,
//     title: "Billing360 — Street Vendor POS",
//     category: "Software & POS",
//     desc: "Fast, offline-ready POS built for street food vendors. Bill in under 3 seconds with GST reports and WhatsApp receipts.",
//     tags: ["POS System", "Offline Mode", "GST"],
//     gradient: "from-blue-600 to-indigo-700",
//     icon: "🧾",
//     link: "/pos/street-vendor",
//   },
//   {
//     id: 2,
//     title: "Billing360 — Restaurant POS",
//     category: "Software & POS",
//     desc: "Table management, kitchen display, and quick modifiers built for cafes and small restaurants.",
//     tags: ["Restaurant", "POS", "KDS"],
//     gradient: "from-orange-500 to-red-600",
//     icon: "🍽️",
//     link: "/pos/restaurant",
//   },
//   {
//     id: 3,
//     title: "Sales CRM — Lead Pipeline",
//     category: "Software & POS",
//     desc: "Custom CRM with visual Kanban pipeline, automated follow-ups, and full customer history tracking.",
//     tags: ["CRM", "Sales", "Automation"],
//     gradient: "from-violet-600 to-purple-700",
//     icon: "📊",
//     link: "/crm",
//   },
//   // Web Design
//   {
//     id: 4,
//     title: "E-Commerce Website — Fashion Brand",
//     category: "Web Design",
//     desc: "Mobile-first e-commerce with product catalog, cart, and Razorpay payment integration. Built in React.",
//     tags: ["E-Commerce", "React", "SEO"],
//     gradient: "from-pink-500 to-rose-600",
//     icon: "🛍️",
//     link: "/contact",
//   },
//   {
//     id: 5,
//     title: "Corporate Website — Finance Firm",
//     category: "Web Design",
//     desc: "Professional 5-page corporate site with animations, team section, service listing, and contact form.",
//     tags: ["Corporate", "Animations", "React"],
//     gradient: "from-slate-600 to-gray-800",
//     icon: "🏢",
//     link: "/contact",
//   },
//   {
//     id: 6,
//     title: "Restaurant Landing Page",
//     category: "Web Design",
//     desc: "Conversion-focused restaurant website with menu display, reservation form, and Google Maps integration.",
//     tags: ["Landing Page", "Restaurant", "Maps"],
//     gradient: "from-amber-500 to-orange-600",
//     icon: "🍕",
//     link: "/contact",
//   },
//   // Social Media — Ads Videos
//   {
//     id: 7,
//     title: "Festival Ad Campaign — Jewellery Brand",
//     category: "Social Media",
//     subCategory: "Ads Videos",
//     desc: "Short-form ad videos for Diwali and Eid campaigns with animated product reveal and offer taglines.",
//     tags: ["Ad Video", "Festival", "Reels"],
//     gradient: "from-yellow-500 to-amber-600",
//     icon: "📹",
//     link: "/contact",
//   },
//   // Social Media — Business Card Design
//   {
//     id: 8,
//     title: "Premium Business Card — Architect",
//     category: "Social Media",
//     subCategory: "Business Card Design",
//     desc: "Minimal double-sided business card with gold foil effect, QR code, and brand-matched typography.",
//     tags: ["Business Card", "Print Design", "Minimal"],
//     gradient: "from-stone-600 to-zinc-700",
//     icon: "🪪",
//     link: "/contact",
//   },
//   // Social Media — Catalogue Design
//   {
//     id: 9,
//     title: "Product Catalogue — Electronics Store",
//     category: "Social Media",
//     subCategory: "Catalogue Design",
//     desc: "12-page digital catalogue with product grids, pricing tables, and brand-consistent layout for an electronics retailer.",
//     tags: ["Catalogue", "Print", "Product"],
//     gradient: "from-blue-500 to-cyan-600",
//     icon: "📋",
//     link: "/contact",
//   },
//   // Social Media — Festival Creatives
//   {
//     id: 10,
//     title: "Festival Posts — Clothing Brand",
//     category: "Social Media",
//     subCategory: "Festival Creatives",
//     desc: "Custom-designed creatives for all major festivals — Holi, Diwali, Independence Day — branded for a clothing store.",
//     tags: ["Festival", "Social Post", "Branding"],
//     gradient: "from-fuchsia-500 to-pink-600",
//     icon: "🎉",
//     link: "/contact",
//   },
//   // Social Media — Logo Design
//   {
//     id: 11,
//     title: "Logo Design — Food Startup",
//     category: "Social Media",
//     subCategory: "Logo Design",
//     desc: "Modern, bold logo for a cloud kitchen startup. Delivered in SVG, PNG, and full brand color palette.",
//     tags: ["Logo", "Brand", "SVG"],
//     gradient: "from-emerald-500 to-green-600",
//     icon: "✏️",
//     link: "/contact",
//   },
//   // Social Media — Logo Launching Video
//   {
//     id: 12,
//     title: "Logo Reveal Video — Tech Brand",
//     category: "Social Media",
//     subCategory: "Logo Launching Video",
//     desc: "Cinematic 15-second logo reveal animation with sound design and motion graphics for social media launch.",
//     tags: ["Motion", "Video", "Reveal"],
//     gradient: "from-indigo-500 to-blue-700",
//     icon: "🎬",
//     link: "/contact",
//   },
//   // Social Media — Marketing Videos
//   {
//     id: 13,
//     title: "Brand Story Video — Kirana Store",
//     category: "Social Media",
//     subCategory: "Marketing Videos",
//     desc: "60-second brand story video combining voiceover, text animations, and product footage for Instagram and YouTube.",
//     tags: ["Marketing", "Video", "Brand Story"],
//     gradient: "from-teal-500 to-cyan-600",
//     icon: "🎥",
//     link: "/contact",
//   },
//   // Social Media — Poster Designs
//   {
//     id: 14,
//     title: "Sale Poster Series — Retail Brand",
//     category: "Social Media",
//     subCategory: "Poster Designs",
//     desc: "Set of 5 sale posters for print and digital use — bold typography, offer callouts, and branded color scheme.",
//     tags: ["Poster", "Print", "Sale"],
//     gradient: "from-red-500 to-rose-600",
//     icon: "🖼️",
//     link: "/contact",
//   },
//   // Social Media — Promotional Creatives
//   {
//     id: 15,
//     title: "Promo Creatives — Gym & Fitness",
//     category: "Social Media",
//     subCategory: "Promotional Creatives",
//     desc: "Monthly social media promotional content pack — offers, membership deals, and motivational posts for a gym.",
//     tags: ["Promo", "Fitness", "Content Pack"],
//     gradient: "from-orange-600 to-yellow-500",
//     icon: "💪",
//     link: "/contact",
//   },
//   // Social Media — Reels Coverpage Carousels
//   {
//     id: 16,
//     title: "Reels Carousel — Beauty Brand",
//     category: "Social Media",
//     subCategory: "Reels Coverpage Carousels",
//     desc: "Swipeable carousel and reels cover page designs for a beauty brand's Instagram profile — consistent and aesthetic.",
//     tags: ["Reels", "Carousel", "Instagram"],
//     gradient: "from-pink-400 to-purple-600",
//     icon: "🎠",
//     link: "/contact",
//   },
//   // Social Media — Status Videos
//   {
//     id: 17,
//     title: "WhatsApp Status Pack — Festive",
//     category: "Social Media",
//     subCategory: "Status Videos",
//     desc: "30-second looping status videos for WhatsApp and Instagram Stories — festive themed for a local business.",
//     tags: ["Status", "WhatsApp", "Short Video"],
//     gradient: "from-green-600 to-teal-500",
//     icon: "📲",
//     link: "/contact",
//   },
// ];

export default function PortfolioPage() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeCategory, setActiveCategory] =
    useState<MainCategory>("Software & POS");
  const [activeSub, setActiveSub] = useState<string>("All");

  const filtered =
    activeCategory === "Social Media"
      ? activeSub === "All"
        ? portfolioItems.filter((p) => p.category === "Social Media")
        : portfolioItems.filter(
            (p) => p.category === "Social Media" && p.subCategory === activeSub,
          )
      : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-background pb-24">
      {/* Hero */}
      <section className="pb-14 bg-secondary text-white rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-accent/20"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10 pt-12">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 mb-4 backdrop-blur-md">
              Our Work
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-white">
              Projects We're Proud Of
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              From POS systems to brand identities — here's a look at what we've built for businesses like yours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Category Tabs */}
      <section className="bg-white border-b border-border py-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {mainCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (cat === "Social Media") setActiveSub("All");
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-secondary/70 border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Social Media Sub-nav */}
          <AnimatePresence>
            {activeCategory === "Social Media" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <div className="mt-5 pt-5 border-t border-border/60">
                  <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Filter by type
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {socialSubCategories.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveSub(sub)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                          activeSub === sub
                            ? "bg-accent text-white border-accent shadow-sm"
                            : "bg-background text-secondary/60 border-border hover:border-accent/50 hover:text-accent"
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + activeSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Card Top */}
                  {/* <div
                    className={`relative h-48 bg-gray-100 flex items-center justify-center`}
                  >

                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      {project.type === "image" && (
                        <img
                          src={project.src}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}

                      {project.type === "video" && (
                        <video
                          src={project.src}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          autoPlay
                        />
                      )}
                      {project.type === "pdf" && (
                        <iframe src={project.src} className="w-full h-full" />
                      )}

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

                      <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">
                        {project.subCategory ?? project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">
                      {project.subCategory ?? project.category}
                    </span>
                  </div> */}
                  <div
                    className="relative h-56 bg-black overflow-hidden cursor-pointer"
                    onClick={() => setActiveItem(project)}
                  >
                    {/* IMAGE */}
                    {project.type === "image" && (
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    )}

                    {/* VIDEO */}
                    {project.type === "video" && (
                      <video
                        src={project.src}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        autoPlay
                      />
                    )}

                    {/* PDF */}
                    {project.type === "pdf" && (
                      <iframe src={project.src} className="w-full h-full" />
                    )}

                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-display font-bold mb-2 leading-snug">
                      {project.subCategory}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.title}
                    </p>

                    {/* <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-secondary/70 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
 */}
                    {/* <Link> */}
                    {/*  href={project.link}> <Button variant="outline" size="sm" className="w-full rounded-xl group/btn text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors">
                        View
                        <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button> */}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation(); // 👈 IMPORTANT
                        setActiveItem(project);
                      }}
                      variant="outline"
                      size="sm"
                      className="w-full rounded-xl group/btn text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      View
                      <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    {/* </Link> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-muted-foreground"
            >
              <p className="text-4xl mb-4">🎨</p>
              <p className="font-medium">
                No projects yet in this category — coming soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="bg-secondary rounded-2xl px-8 py-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Want us to build something for you?
              </h2>
              <p className="text-secondary-foreground/70 mb-6 max-w-xl mx-auto">
                Tell us about your project and we'll put together a plan that
                fits your budget and timeline.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-secondary hover:bg-white/90"
                >
                  Start Your Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setActiveItem(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            {/* CLOSE */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setActiveItem(null)}
            >
              ✕
            </button>

            {/* IMAGE */}
            {activeItem.type === "image" && (
              <img
                src={activeItem.src}
                className="w-full max-h-[80vh] object-contain"
              />
            )}

            {/* VIDEO */}
            {activeItem.type === "video" && (
              <video
                src={activeItem.src}
                controls
                autoPlay
                className="w-full max-h-[80vh]"
              />
            )}

            {/* PDF */}
            {activeItem.type === "pdf" && (
              <iframe src={activeItem.src} className="w-full h-[80vh]" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
