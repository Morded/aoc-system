import ColoredDot from "./ColoredDot";
import Header1 from "./Header1";
import SerifBody from "./SerifBody";
import { FadeInScaleWhenVisible, FadeInUpWhenVisible, FadeInWhenVisible } from "../utils/FramerAnimations";

const BusinessToBalance = () => {
  return (
    <section className="mint-h-screen w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 py-10 gap-10 px-4 xl:px-0">
      <div className="col-span-1 flex flex-col gap-6">
        <FadeInScaleWhenVisible delay={0.1}>
          <Header1>
            Business to Balance
            <ColoredDot color="text-aocPurple" />
          </Header1>
        </FadeInScaleWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <SerifBody>
            Az AOC kategóriateremtő az üzleti szoftverek területén.<br/>
            Egy új kategóriát hozott létre.
          </SerifBody>
        </FadeInWhenVisible>
      </div>
      <FadeInUpWhenVisible delay={0.3}>
        <p className="text-[2rem] md:text-5xl font-bold md:font-medium tracking-normal md:leading-[4rem] text-aocDark">
          A Business to Balance felfogás túlmutat a vállalkozások mindennapi igényeinek kielégítésén.<br/>
          Segíti a vállalkozások zökkenőmentes fejlődését, a szervezet stabil struktúrájának kialakítását. 
        </p>
      </FadeInUpWhenVisible>
    </section>
  )
}

export default BusinessToBalance;
