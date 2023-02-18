import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Review from "./Review";
import testimonialList from "../../public/testimonials";

const Testimonials = () => {
  return (
    <Carousel className="bg-aocDark text-aocLight py-10 lg:py-20">
      {testimonialList.map((testimonial, index) => {
        const { by, from, link, text } = testimonial;
        return (
          <CarouselItem key={index} index={index}>
            <Review by={by +` (${from})`}>
              {text}
            </Review>
          </CarouselItem>
        )

      })}
    </Carousel>
  )
}

export default Testimonials;
