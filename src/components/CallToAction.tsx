import { FadeInScaleWhenVisible, FadeInUpWhenVisible, FadeInWhenVisible } from "../utils/FramerAnimations";
import Button from "./Button";
import Header1 from "./Header1";
import ProductPicker from "./ProductPicker";
import SerifBody from "./SerifBody";

type Props = {
  header: string 
  subText?: string
  buttonText: string 
  href?: string
}

const CallToAction = ({header, subText, buttonText, href}: Props) => {
  return (
    <section className="w-full px-4 lg:px-0 py-28 bg-aocOrange bg-[url(/noise.png)] flex justify-center mb-5">
      <div className="max-w-7xl flex flex-col justify-center items-center text-center gap-8">
        <FadeInScaleWhenVisible delay={0.1}>
          <Header1>{header}</Header1>
        </FadeInScaleWhenVisible>
        {subText &&
          <FadeInWhenVisible delay={0.2}>
            <SerifBody>{subText}</SerifBody>
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
