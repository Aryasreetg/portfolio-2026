import { Variants } from 'framer-motion';

// ============================================================================
// Framer Motion Animation Variants
// ============================================================================

/**
 * Container variants for staggered children animations
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Item variants for fade-up on scroll
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Section title entrance animation
 */
export const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Fade in animation
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Slide in from left
 */
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Slide in from right
 */
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Scale and fade in
 */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Icon hover effect
 */
export const iconHoverVariants: Variants = {
  hover: { scale: 1.1, rotate: 5 },
  tap: { scale: 0.95 },
};

/**
 * Button hover effect
 */
export const buttonHoverVariants: Variants = {
  hover: { scale: 1.05, y: -2 },
  tap: { scale: 0.95 },
};

/**
 * Card hover effect
 */
export const cardHoverVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -8 },
};

/**
 * Tab indicator animation
 */
export const tabIndicatorVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: '100%', opacity: 1 },
};

/**
 * Staggered list animation for skills, projects, etc.
 */
export const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * Individual list item animation
 */
export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

/**
 * Badge entrance animation
 */
export const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

/**
 * Timeline item animation
 */
export const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Staggered timeline animation
 */
export const timelineContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};
