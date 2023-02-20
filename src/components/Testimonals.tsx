import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Review from "./Review";
import testimonialList from "../../public/testimonials";

const Testimonials = () => {
  return (
    <Carousel className="bg-aocOrange text-aocDark py-10 lg:py-20 bg-[url(/noise.png)]">
      {testimonialList.map((testimonial, index) => {
        const { by, from, link, text } = testimonial;
        return (
          <CarouselItem key={index} index={index}>
            <Review by={by +` (${from})`} link={link}>
              {text}
            </Review>
          </CarouselItem>
        )

      })}
    </Carousel>
  )
}

export default Testimonials;
