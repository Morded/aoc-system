import BodyText from "./BodyText"
import ColoredText from "./ColoredDot"
import Header3 from "./Header3"

const WhoAreWe = () => {
  return (
    <section className="flex flex-col gap-10 w-full text-aocDark z-30 max-w-6xl px-4 xl:px-0">
      <Header3>
        Kik vagyunk
        <ColoredText color="text-aocPurple">?</ColoredText>
      </Header3>
      <div className="grid grid-cols-12 gap-[15px]">
        <div className="col-span-none sm:col-span-2"></div>
        <div className="col-span-12 sm:col-span-10">
          <BodyText>
            Csapatunk kreatív emberek és különböző nézőpontok olvasztótégelye. Közös munkánkat a teljesítmények elismerése, a tisztelet és a szabadon szárnyaló fantázia jellemzi. 
            <br/><br/>
            Ezen elvek alapján jött össze lelkes csapatunk is, akiknek küldetése és stratégiája a hosszú távú alkotás, az értékteremtés, fókuszban az innovációval és minőséggel.
          </BodyText>
        </div>
      </div>
    </section>
  )
}

export default WhoAreWe
