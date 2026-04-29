import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Pill } from './Pill';
import { SplineHeroBackground } from './SplineHeroBackground';

export interface ProjectPreviewData {
  label: string;
  category: string;
  title: string;
  description: string;
  accent: string;
  secondaryAccent: string;
  visualTone: string;
}

const projects: ProjectPreviewData[] = [
  {
    label: 'Synexia',
    category: 'Speculative design / Future interfaces',
    title: 'Synexia',
    description: 'Exploring emotional regulation, neural AR, and the ethics of productivity-driven interface futures.',
    accent: '#8b5cf6',
    secondaryAccent: '#38bdf8',
    visualTone: 'dark neural interface, AR lens, purple/blue abstract signal, speculative technology mood',
  },
  {
    label: 'VoiceOver',
    category: 'Service website redesign',
    title: 'VoiceOver',
    description: 'Redesigning a service organisation’s website to improve clarity, navigation, accessibility, and user confidence.',
    accent: '#a78bfa',
    secondaryAccent: '#e5e7eb',
    visualTone: 'website audit boards, interface panels, accessibility cues, service navigation',
  },
  {
    label: 'KBHFF',
    category: 'Service design / Civic food systems',
    title: 'KBHFF',
    description: 'Mapping cooperative food practices, participation, and everyday service interactions in a community-led system.',
    accent: '#22c55e',
    secondaryAccent: '#facc15',
    visualTone: 'civic food network, cooperative mapping, produce crates, service blueprint fragments',
  },
  {
    label: 'Napier',
    category: 'UX audit / Higher education',
    title: 'Napier',
    description: 'Reviewing student-facing digital journeys, content structure, and short-course booking experiences across university services.',
    accent: '#06b6d4',
    secondaryAccent: '#60a5fa',
    visualTone: 'journey maps, course cards, student portal fragments, audit grid',
  },
  {
    label: 'IKEA',
    category: 'Service design / Loyalty futures',
    title: 'IKEA',
    description: 'Designing future loyalty concepts around migration, settling in, trust, home-making, and everyday support.',
    accent: '#2563eb',
    secondaryAccent: '#facc15',
    visualTone: 'home objects, migration journey map, soft domestic systems, IKEA-inspired blue/yellow accents used subtly',
  },
  {
    label: 'Alba Denim',
    category: 'Brand and web design',
    title: 'Alba Denim',
    description: 'Developing a digital presence for a denim brand with a clean visual system and direct product storytelling.',
    accent: '#1d4ed8',
    secondaryAccent: '#94a3b8',
    visualTone: 'denim texture, editorial product layout, e-commerce interface fragments',
  },
  {
    label: 'Elderune',
    category: 'Digital product / Interaction concept',
    title: 'Elderune',
    description: 'Creating a mythic digital experience concept with atmospheric interaction, narrative structure, and immersive interface direction.',
    accent: '#f97316',
    secondaryAccent: '#a855f7',
    visualTone: 'dark rune-like symbols, atmospheric interface, fantasy system map, subtle glowing details',
  },
  {
    label: 'All Work',
    category: 'Selected projects',
    title: 'Selected work',
    description: 'A cross-section of UX, service design, web design, research, strategy, and transformation work.',
    accent: '#64748b',
    secondaryAccent: '#c4b5fd',
    visualTone: 'layered case-study grid, multiple project thumbnails, portfolio overview',
  },
];

interface DarkHeroProps {
  activeProject: string | null;
  onProjectActivate: (project: string) => void;
  onProjectClear: () => void;
}

function ProjectVisual({ project }: { project: ProjectPreviewData }) {
  return (
    <div
      className="relative h-[300px] w-[min(42vw,560px)] min-w-[360px] overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.04] shadow-2xl"
      style={{
        background:
          `radial-gradient(circle at 18% 18%, ${project.accent}55, transparent 34%), ` +
          `radial-gradient(circle at 82% 22%, ${project.secondaryAccent}40, transparent 30%), ` +
          'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02) 42%, rgba(0,0,0,0.45))',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <div className="absolute left-8 top-8 h-28 w-44 rounded-2xl border border-white/15 bg-black/25 backdrop-blur-md" />
      <div className="absolute right-8 top-10 h-40 w-52 rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md" />
      <div className="absolute bottom-8 left-12 h-24 w-64 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md" />
      <div
        className="absolute bottom-10 right-12 h-28 w-28 rounded-full border border-white/20"
        style={{ boxShadow: `0 0 90px ${project.accent}80 inset, 0 0 60px ${project.secondaryAccent}50` }}
      />
      <div className="absolute left-10 top-12 flex gap-2">
        <span className="h-2 w-2 rounded-full bg-white/70" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div className="absolute bottom-10 left-16 right-16 space-y-2">
        <div className="h-px w-full bg-white/20" />
        <div className="h-px w-2/3 bg-white/10" />
      </div>
      <p className="absolute bottom-7 right-8 max-w-[230px] text-right text-[0.625rem] uppercase leading-relaxed tracking-[0.18em] text-white/35">
        {project.visualTone}
      </p>
    </div>
  );
}

function ProjectPreview({ project }: { project: ProjectPreviewData }) {
  return (
    <motion.div
      key={project.label}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-0 z-20 hidden md:block"
    >
      <div className="absolute right-6 top-[18%] lg:right-16">
        <ProjectVisual project={project} />
      </div>

      <div className="absolute left-[18%] top-[28%] max-w-[360px] lg:left-[24%]">
        <p className="mb-5 text-[0.6875rem] uppercase tracking-[0.22em] text-white/45" style={{ fontFamily: 'Inter, sans-serif' }}>
          {project.category}
        </p>
      </div>

      <div className="absolute bottom-[18%] left-6 right-6 lg:left-[24%] lg:right-auto">
        <p
          className="text-white"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(4rem, 9vw, 8rem)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '0.01em',
          }}
        >
          {project.title}
        </p>
      </div>

      <p
        className="absolute bottom-[18%] right-6 max-w-[300px] text-white/55 lg:right-16"
        style={{ fontSize: '0.875rem', lineHeight: 1.65, fontWeight: 300, fontFamily: 'Inter, sans-serif' }}
      >
        {project.description}
      </p>
    </motion.div>
  );
}

export function DarkHero({ activeProject, onProjectActivate, onProjectClear }: DarkHeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const [mobileProjectIndex, setMobileProjectIndex] = useState(0);
  const activeProjectData = projects.find((project) => project.label === activeProject) ?? null;

  useEffect(() => {
    const section = heroRef.current;

    if (!section) {
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateMobileProject = () => {
      if (!mediaQuery.matches) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      const nextIndex = Math.min(projects.length - 1, Math.floor(progress * projects.length));
      setMobileProjectIndex(nextIndex);
    };

    updateMobileProject();
    window.addEventListener('scroll', updateMobileProject, { passive: true });
    window.addEventListener('resize', updateMobileProject);
    mediaQuery.addEventListener('change', updateMobileProject);

    return () => {
      window.removeEventListener('scroll', updateMobileProject);
      window.removeEventListener('resize', updateMobileProject);
      mediaQuery.removeEventListener('change', updateMobileProject);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[240svh] overflow-hidden bg-black md:flex md:h-screen md:min-h-0 md:items-end md:pb-32 md:pt-20">
      {/* Video placeholder background - glossy black with violet/blue streaks */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Glossy abstract surfaces */}
        <div className="absolute inset-0">
          {/* Diagonal glossy streaks */}
          <motion.div
            animate={{
              opacity: [0.15, 0.25, 0.15],
              rotate: [45, 47, 45],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-1/3 top-[6svh] h-[780px] w-[520px] md:top-0 md:-right-1/4 md:h-[1200px] md:w-[800px]"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(99, 102, 241, 0.3) 30%, rgba(139, 92, 246, 0.35) 50%, transparent 100%)',
              transform: 'rotate(45deg)',
              filter: 'blur(60px)',
            }}
          />

          <motion.div
            animate={{
              opacity: [0.2, 0.35, 0.2],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-[-45%] top-[10svh] h-[760px] w-[520px] md:left-0 md:top-1/4 md:h-[900px] md:w-[700px]"
            style={{
              background: 'linear-gradient(60deg, rgba(67, 56, 202, 0.25) 0%, rgba(88, 28, 135, 0.2) 50%, transparent 100%)',
              transform: 'rotate(-30deg)',
              filter: 'blur(70px)',
            }}
          />

          <motion.div
            animate={{
              opacity: [0.18, 0.3, 0.18],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-[18svh] right-[-55%] h-[680px] w-[620px] md:bottom-0 md:right-1/3 md:h-[800px] md:w-[900px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.25) 0%, rgba(79, 70, 229, 0.15) 40%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />

          {/* Sharp light streaks */}
          <div
            className="absolute right-[-15%] top-[34svh] h-2 w-[520px] md:right-1/4 md:top-1/4 md:w-[600px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)',
              filter: 'blur(4px)',
              transform: 'rotate(25deg)',
            }}
          />

          <div
            className="absolute bottom-[34svh] left-[-20%] h-2 w-[420px] md:bottom-1/3 md:left-1/4 md:w-[500px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.35), transparent)',
              filter: 'blur(3px)',
              transform: 'rotate(-15deg)',
            }}
          />
        </div>

        <SplineHeroBackground />

        {/* Dark overlay for contrast and vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/68" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 18%, rgba(0,0,0,0.68) 100%)' }} />
      </div>

      {/* Project pills - left side */}
      <div className="absolute left-6 top-[31%] z-30 hidden flex-col gap-2 pointer-events-auto md:flex lg:left-8">
        {projects.map((project, index) => (
          <Pill
            key={project.label}
            delay={0.8 + index * 0.08}
            active={activeProject === project.label}
            onMouseEnter={() => onProjectActivate(project.label)}
            onMouseLeave={onProjectClear}
            onFocus={() => onProjectActivate(project.label)}
            onBlur={onProjectClear}
            ariaLabel={`Preview ${project.label}`}
          >
            {project.label}
          </Pill>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeProjectData && <ProjectPreview project={activeProjectData} />}
      </AnimatePresence>

      <div className="sticky top-0 z-20 h-[100svh] w-full md:hidden">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="absolute left-5 right-5 top-[22svh] text-white"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.25rem, 15vw, 5rem)',
            fontWeight: 300,
            lineHeight: 0.98,
            letterSpacing: '0.015em',
          }}
        >
          Discovering
          <br />
          <span className="block pl-[18vw]">better</span>
          <span className="block pl-[34vw]">systems</span>
        </motion.h1>

        <div className="absolute left-6 top-[54svh] flex flex-col gap-2 pointer-events-auto">
          {projects.map((project, index) => (
            <Pill
              key={project.label}
              delay={0.25 + index * 0.04}
              active={mobileProjectIndex === index}
              mobileActiveStyle
              ariaLabel={`Project ${project.label}`}
            >
              {project.label}
            </Pill>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: mobileProjectIndex === projects.length - 1 ? 1 : 0, y: mobileProjectIndex === projects.length - 1 ? 0 : 14 }}
          transition={{ duration: 0.35 }}
          className="absolute bottom-[max(2rem,env(safe-area-inset-bottom))] left-6 right-8 pointer-events-none"
        >
          <p className="max-w-[320px] text-white/68" style={{ fontSize: '0.9375rem', lineHeight: 1.55, fontWeight: 300, fontFamily: 'Inter, sans-serif' }}>
            Heurisco helps teams discover clearer digital paths through service design, UX design, web design, and practical transformation.
          </p>
          <div className="mt-4 h-1.5 w-1.5 rounded-full bg-violet-400" />
        </motion.div>
      </div>

      {/* Supporting text - mid-right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: activeProjectData ? 0 : 1, y: activeProjectData ? 8 : 0 }}
        transition={{ duration: 0.35, delay: activeProjectData ? 0 : 1.2 }}
        className="absolute top-[45%] right-6 lg:right-16 max-w-[270px] hidden lg:block z-20 pointer-events-none"
      >
        <p className="text-white/45 mb-3" style={{ fontSize: '0.8125rem', lineHeight: 1.65, fontWeight: 300, fontFamily: 'Inter, sans-serif' }}>
          Heurisco helps teams discover clearer digital paths through service design, UX design, web design, and practical transformation.
        </p>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full bg-violet-400"
        />
      </motion.div>

      {/* Main headline - centered with editorial offset */}
      <div className="relative z-20 mx-auto hidden w-full max-w-[1800px] px-6 pointer-events-none md:block lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: activeProjectData ? 0 : 1, y: activeProjectData ? 18 : 0 }}
          transition={{ duration: activeProjectData ? 0.28 : 0.45, delay: activeProjectData ? 0 : 0.4 }}
          className="text-white text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.5rem, 7.5vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '0.015em',
          }}
        >
          Discovering better
          <br />
          <span style={{ display: 'inline-block', marginLeft: 'clamp(2rem, 6vw, 6rem)' }}>systems</span>
        </motion.h1>
      </div>
    </section>
  );
}
