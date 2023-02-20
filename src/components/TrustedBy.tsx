import Image from "next/image";
import Link from "next/link";
import Header2 from "./Header2";
import testimonialList from "../../public/testimonials";

const TrustedBy = () => {
  return (
    <div className="my-20 px-4 xl:px-0 w-full max-w-7xl">
      <Header2>
      Trusted By
      </Header2>
      <div className="my-10 flex flex-wrap justify-center gap-10 w-full relative overflow-hidden">
        {[...testimonialList, ...testimonialList].map((logo, index) => 
          <Link  
            href={logo.link}
            target="_blank"
            key={index} 
            className={`
              flex items-center justify-center relative w-auto h-12  
              saturate-0 hover:saturate-100 transition-all ease-in-out duration-100
              md:18 lg:h-24
            `} >
            <Image 
              alt={logo.from} 
              src={`/${logo.logo}`} 
              width={3000}
              height={2000}
              className="h-12 md:18 lg:h-24 w-auto"
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default TrustedBy;
