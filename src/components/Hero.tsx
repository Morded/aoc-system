import Image from "next/image";
import { useRef } from "react";
import HackAnimation from "../utils/HackAnimation";
import Button from "./Button";
import Header1 from "./Header1";
import SerifBody from "./SerifBody";

const Hero = () => {
  const gridItem = useRef<HTMLDivElement>(null)
  const sikeres = HackAnimation({defaultText: 'sikeres'})

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-4 w-full min-h-screen max-w-6xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 items-center">
          <div className="text-lg flex flex-col gap-6 col-span-1">
            <Header1>
              A <UnderlinedText value={sikeres} /> vállalkozások platformja
            </Header1>
            <SerifBody>
              Egyszerű üzleti szoftverek, amelyek megkönnyítik a mindennapokat.
            </SerifBody>

            <div className="flex gap-4 mt-4">
              <Button 
                href="#" 
                text="sales activity" 
                bgColor="bg-aocSky" 
                textColor="text-aocDark"
              />
              <Button 
                href="#" 
                text="business & office" 
                bgColor="bg-aocOrange" 
                textColor="text-aocDark"
              />
            </div>
          </div>

          <div ref={gridItem} className="col-span-1 relative h-screen flex items-center justify-center">
            <Image alt="girl with puzzle gif" src="/puzzle.gif" width={gridItem.current?.clientWidth ?? 615} height={gridItem.current?.clientHeight ?? 500} />
            <div className="h-[110vh] top-0 absolute w-56 bg-aocOrange opacity-20 z-[-1]"></div>
          </div>
        </div>
    </section>
  )
}

export default Hero;

type UnderlinedTextProps = {
  value: string;
}

function UnderlinedText({ value }: UnderlinedTextProps) {
  return (
    <div className="relative w-fit inline-block">
      {value}
      <div className="absolute bg-aocOrange w-full h-7 z-[-1] bottom-2"></div>
    </div>
  )
}
