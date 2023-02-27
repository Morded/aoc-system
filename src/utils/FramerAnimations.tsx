import {motion, useReducedMotion, Variants} from "framer-motion"

const DURATION = 0.3
const ONCE = true

type Props = {
  children: React.ReactNode
  delay?: number
}

export const FadeInWhenVisible = ({children, delay = 0}: Props) => {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: ONCE }}
      transition={{ duration: DURATION, delay: delay }}
      variants={{
        visible: { opacity: 1 },
        hidden: reducedMotion ? {} : { opacity: 0 } 
      }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInUpWhenVisible = ({children, delay = 0}: Props) => {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: ONCE }}
      transition={{ duration: DURATION, delay: delay }}
      variants={{
        visible: { opacity: 1, translateY: "0px" },
        hidden: reducedMotion ? {} : { opacity: 0, translateY: "20px" } 
      }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInScaleWhenVisible = ({children, delay = 0}: Props) => {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: ONCE }}
      transition={{ duration: DURATION, delay: delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: reducedMotion ? {} : { opacity: 0, scale: 0.95 }
      }}
    >
      {children}
    </motion.div>
  )
}

export const opacityVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

export const FadeIn = ({children, delay}: Props) => {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      transition={{ duration: DURATION, delay: delay }}
      variants={reducedMotion ? {} : opacityVariants}
    >
      {children}
    </motion.div>
  )
}

export const SlideInLeft = ({children, delay}: Props) => {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: ONCE }}
      transition={{ duration: DURATION, delay: delay }}
      variants={{
        visible: { opacity: 1, translateX: "0px", zIndex: -1, position: "relative" },
        hidden: reducedMotion ? {} : { opacity: 0, translateX: "-100%", zIndex: -1, position: "relative" }
      }}
    >
      {children}
    </motion.div>
  )
}
