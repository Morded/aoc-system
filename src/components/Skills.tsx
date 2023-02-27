import { useRef } from "react"
import s from "../styles/skills.module.css"
import useHighlightTextOnScroll, { opacityForBlock } from "../utils/useHighlightTextOnScroll"

const Skills = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const progress = useHighlightTextOnScroll({container: refContainer, numOfPages: 4})

  return (
    <div ref={refContainer} className="bg-aocDark text-aocLight w-full">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div className={s.skillText} style={{
            opacity: opacityForBlock(progress, 0)
          }}>We know our tools inside out.</div>
          <span className={`${s.skillText ?? ""} inline-block after:content-['_']`} style={{
            opacity: opacityForBlock(progress, 1)
          }}>Our team has contributed 124 commits to React Native core, powering thousands of apps worldwide.</span>
          <span className={`${s.skillText ?? ""} inline-block`} style={{
            opacity: opacityForBlock(progress, 2)
          }}>We&apos;re maintinging some of the most popular open-source projects, with over <strong>1235</strong> downloads.</span>
        </div>
      </div>
    </div>
  )
}

export default Skills
