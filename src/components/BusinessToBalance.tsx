import ColoredDot from "./ColoredDot";
import Header1 from "./Header1";
import SerifBody from "./SerifBody";

const BusinessToBalance = () => {
  return (
    <section className="mint-h-screen w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 py-10 gap-4 px-4 md:px-0">
      <div className="col-span-1 flex flex-col gap-6">
        <Header1>
          Business to Balance
          <ColoredDot color="text-aocPurple" />
        </Header1>
        <SerifBody>
          Az AOC kategóriateremtő az üzleti szoftverek területén.
          Egy új, Business to Balance kategóriát hozott létre.
        </SerifBody>
      </div>
      <div className="col-span-1">
        <p className="text-[2rem] md:text-[3.25rem] font-bold md:font-medium tracking-wide leading-tight">
          A Business to Balance felfogás túlmutat a vállalkozások mindennapi igényeinek kielégítésén.<br/>
          Segíti a vállalkozások zökkenőmentes fejlődését, a szervezet stabil struktúrájának kialakítását. 
        </p>
      </div>
    </section>
  )
}

export default BusinessToBalance;
