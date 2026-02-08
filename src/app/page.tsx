import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollSection from "@/components/ScrollSection";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0C0A09]">
      <ScrollProgress />
      {/* Scrollytelling Section */}
      <section className="relative">
        <ScrollyCanvas />
      </section>

      {/* Information Sections */}
      <div className="relative z-20 space-y-0">
        <ScrollSection>
          <About />
        </ScrollSection>
        <ScrollSection>
          <Skills />
        </ScrollSection>
        <ScrollSection>
          <Projects />
        </ScrollSection>
        <ScrollSection>
          <Experience />
        </ScrollSection>
        <ScrollSection>
          <Contact />
        </ScrollSection>
      </div>

      {/* Premium Footer */}
      <footer className="py-24 border-t border-accent/10 bg-[#0C0A09] relative z-20 px-8 md:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-foreground font-bold text-2xl font-display tracking-tight uppercase">Abhas Somkuwar</h3>
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em] mt-2 italic">Neural Architecture 2026</p>
          </div>

          <div className="flex gap-10 items-center">
            <a href="#about" suppressHydrationWarning className="text-gray-600 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-accent pb-1 transition-all">About</a>
            <a href="#projects" suppressHydrationWarning className="text-gray-600 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-accent pb-1 transition-all">Systems</a>
            <a href="#contact" suppressHydrationWarning className="text-gray-600 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-accent pb-1 transition-all">Direct</a>
          </div>

          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; 2026 Recursive Intelligence.
          </p>
        </div>
      </footer>

    </main>
  );
}
