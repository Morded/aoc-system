import { useRef, useState } from "react";
import Button from "./Button";
import DemoPicker from "./DemoPicker";
import Header1 from "./Header1";
import useOutsideCloser from "./hooks/useOutsideCloser";
import SerifBody from "./SerifBody";

const TryDemoCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null)
  useOutsideCloser({ref: refContainer, setIsOpen: setIsOpen})

  return (
    <section className="w-full px-4 lg:px-0 py-28 bg-aocOrange bg-[url(/noise.png)] flex justify-center mb-5">
      <div className="max-w-7xl flex flex-col justify-center items-center text-center gap-8">
        <Header1>Próbálja ki ingyenes demóink egyikét</Header1>
        <SerifBody>
          Az első 14 nap ingyenes
        </SerifBody>
          <div 
            ref={refContainer}
            className="relative" 
            onClick={() => setIsOpen(!isOpen)}
          >
          <Button text="Kipróbálom" big={true}/>
          <DemoPicker isOpen={isOpen} />
        </div>
      </div>
    </section>
  )
}

export default TryDemoCTA;
