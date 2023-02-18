import Image from "next/image";
import Button from "./Button";

type ProductProps = { 
  header: string,
  text: string, 
  buttonHref: string,
  buttonBgColor?: string,
  imageSrc: string
}

const Product = ({ header, text, buttonHref, buttonBgColor, imageSrc }: ProductProps) => {
  return (
    <section className="w-full min-h-screen flex justify-center">
      <div className="max-w-6xl grid grid-cols-2 relative">
        <div className="bg-aocDark text-aocLight min-h-screen flex flex-col justify-center items-center pr-14">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-[2rem] tracking-[0.06em] leading-none">
                { header }
              </h2>
              <p className="text-[3.25rem] leading-tight font-black tracking-[0.06em]">{ text }</p>
            </div>
            <Button 
              href={buttonHref} 
              text="Részletek" 
              bgColor={buttonBgColor ? "bg-" + buttonBgColor : undefined} 
              textColor="text-aocDark" />
          </div>
        </div>
        <div className="max-w-1/2 relative">
          <Image alt="mobile app" src={`/${imageSrc}`} fill />
        </div>
      </div>
    </section>
  )
}

export default Product;
