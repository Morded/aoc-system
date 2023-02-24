import {motion} from "framer-motion"

const DURATION = 0.3

type Props = {
  children: React.ReactNode
  delay?: number
}

export const FadeInWhenVisible = ({children, delay = 0}: Props) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true }}
      transition={{ duration: DURATION, delay: delay }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInUpWhenVisible = ({children, delay = 0}: Props) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true }}
      transition={{ duration: DURATION, delay: delay }}
      variants={{
        visible: { opacity: 1, translateY: "0px" },
        hidden: { opacity: 0, translateY: "20px" }
      }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInScaleWhenVisible = ({children, delay = 0}: Props) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true }}
      transition={{ duration: DURATION, delay: delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.95 }
      }}
    >
      {children}
    </motion.div>
  )
}

