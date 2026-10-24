import { motion, useAnimationControls, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function MotionReveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.15 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const section = element.closest('section');
    const isProjects = section?.id === 'projetos' || section?.id === 'projects';
    const projectLink = isProjects ? element.querySelector<HTMLAnchorElement>('article a[href]') : null;
    const href = projectLink?.getAttribute('href') || '';
    const direction = href.includes('/projetos/psicompass') ? -1 : href.includes('/projetos/projeto-sah') ? 1 : 0;
    const distance = window.matchMedia('(max-width: 767px)').matches ? 48 : 140;

    if (direction && section) section.style.overflowX = 'clip';

    if (reduceMotion) {
      controls.set({ opacity: 1, x: 0, y: 0 });
      return;
    }

    if (!inView) {
      controls.set({ opacity: 0, x: direction * distance, y: direction ? 0 : 32 });
      return;
    }

    void controls.start({
      opacity: 1, x: 0, y: 0,
      transition: { duration: direction ? 0.85 : 0.65, delay: direction ? 0 : delay, ease: 'easeOut' }
    });
  }, [controls, delay, inView, reduceMotion]);

  return (
    <motion.div ref={ref} className={className} initial={false} animate={controls}>
      {children}
    </motion.div>
  );
}
