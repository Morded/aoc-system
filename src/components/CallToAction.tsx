import { FadeInScaleWhenVisible, FadeInUpWhenVisible, FadeInWhenVisible } from "../utils/FramerAnimations";
import BodyText from "./BodyText";
import Button from "./Button";
import Header3 from "./Header3";
import ProductPicker from "./ProductPicker";

type Props = {
  header: string 
  subText?: string
  buttonText: string 
  href?: string
}

const CallToAction = ({header, subText, buttonText, href}: Props) => {
  return (
    <section className="w-full px-4 lg:px-0 py-28 md:py-48 bg-aocOrange bg-[url(/noise.png)] flex justify-center mb-5">
      <div className="max-w-4xl flex flex-col justify-center items-center text-center gap-8">
        <FadeInScaleWhenVisible delay={0.1}>
          <Header3>{header}</Header3>
        </FadeInScaleWhenVisible>
        {subText &&
          <FadeInWhenVisible delay={0.2}>
            <BodyText>{subText}</BodyText>
          </FadeInWhenVisible>
        }
        <FadeInUpWhenVisible delay={0.3}>
          {href
            ? <div className="mt-4 w-fit">
              <Button 
                text={buttonText} 
                href={href}
                big={true}
              />
            </div>
            : <ProductPicker buttonText={buttonText} big />
          }
        </FadeInUpWhenVisible>
      </div>
    </section>
  )
}

export default CallToAction;
