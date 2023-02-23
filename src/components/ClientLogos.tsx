import Image from "next/image";
import Link from "next/link";
import testimonialList from "../../public/testimonials";
import SliderContainer, { SliderItem } from "./Slider";

type Props = {
  reverse?: boolean;
}

const ClientLogos = ({reverse}: Props) => {
  const logos = [...testimonialList];
  if (reverse === true) 
    logos.reverse()

  return (
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <div className="mt-10 flex justify-center gap-10 w-full relative overflow-hidden">
        {logos.map((logo, index) => 
          <SliderItem key={index} width={150}>
            <Link  
              key={index} 
              href={logo.link}
              target="_blank"
              className={`
                flex items-center justify-center relative w-auto h-12  
                saturate-0 hover:saturate-100 transition-all ease-in-out duration-100
                md:18 lg:h-24 hover:scale-95
              `} >
              <Image 
                alt={logo.from} 
                src={`/${logo.logo}`} 
                width={150}
                height={50}
                className="h-12 md:18 lg:h-24 w-auto"
                style={{
                  objectFit: "contain"
                }}
              />
            </Link>
          </SliderItem>
        )}
      </div>
    </SliderContainer>
  )
}

export default ClientLogos
