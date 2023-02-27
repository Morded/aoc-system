import BodyText from "./BodyText";
import ColoredText from "./ColoredDot";
import Header1 from "./Header1";

const BusinessToBalance = () => {
  return (
    <section className="mint-h-screen w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 py-10 gap-10 px-4 xl:px-0">
      <div className="col-span-1 flex flex-col gap-6">
        <Header1>
          Business to Balance
          <ColoredText color="text-aocPurple">.</ColoredText>
        </Header1>
        <BodyText>
          Egy új kategóriát hoztunk létre az üzleti szoftverek területén.
        </BodyText>
      </div>
      <p className="text-[2rem] md:text-5xl font-bold md:font-medium tracking-normal md:leading-[4rem] text-aocDark">
        A Business to Balance felfogás túlmutat a vállalkozások mindennapi igényeinek kielégítésén.<br/>
        Segíti a vállalkozások zökkenőmentes fejlődését és a szervezet stabil struktúrájának kialakítását. 
      </p>
    </section>
  )
}

export default BusinessToBalance;
