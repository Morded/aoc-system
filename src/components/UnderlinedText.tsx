import { SlideInLeft } from "../utils/FramerAnimations";

type UnderlinedTextProps = {
  children: React.ReactNode;
}

function UnderlinedText({ children }: UnderlinedTextProps) {
  return (
    <div className="relative w-fit inline-block overflow-x-clip">
      {children}
      <SlideInLeft delay={0.4}>
        <div className={`bg-aocOrange absolute w-full z-[-1] bottom-2 h-3 md:h-5 lg:h-7`}></div>
      </SlideInLeft>
    </div>
  )
}

export default UnderlinedText
