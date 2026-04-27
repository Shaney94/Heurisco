import { motion } from 'motion/react';
import { Pill } from './Pill';

const projects = [
  'Synexia',
  'VoiceOver',
  'KBHFF',
  'Napier',
  'IKEA',
  'Alba Denim',
  'Elderrune',
  'All Work',
];

export function DarkHero() {
  return (
    <section className="h-screen relative overflow-hidden bg-black flex items-end pb-32 pt-20">
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
            className="absolute top-0 -right-1/4 w-[800px] h-[1200px]"
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
            className="absolute top-1/4 left-0 w-[700px] h-[900px]"
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
            className="absolute bottom-0 right-1/3 w-[900px] h-[800px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.25) 0%, rgba(79, 70, 229, 0.15) 40%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />

          {/* Sharp light streaks */}
          <div
            className="absolute top-1/4 right-1/4 w-[600px] h-2"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)',
              filter: 'blur(4px)',
              transform: 'rotate(25deg)',
            }}
          />

          <div
            className="absolute bottom-1/3 left-1/4 w-[500px] h-2"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.35), transparent)',
              filter: 'blur(3px)',
              transform: 'rotate(-15deg)',
            }}
          />
        </div>

        {/* Dark overlay for contrast and vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 100%)' }} />
      </div>

      {/* Project pills - left side */}
      <div className="absolute left-6 lg:left-10 top-[38%] hidden md:flex flex-col gap-2 z-20">
        {projects.map((project, index) => (
          <Pill key={project} delay={0.8 + index * 0.08}>
            {project}
          </Pill>
        ))}
      </div>

      {/* Supporting text - mid-right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-[45%] right-6 lg:right-16 max-w-[270px] hidden lg:block z-20"
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
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.5rem, 7.5vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '0.015em',
          }}
        >
          Delivering service
          <br />
          <span style={{ display: 'inline-block', marginLeft: 'clamp(2rem, 6vw, 6rem)' }}>clarity</span>
        </motion.h1>
      </div>
    </section>
  );
}
