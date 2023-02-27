import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Review from "./Review";
import testimonialList from "../../public/testimonials";

const Testimonials = () => {
  return (
    <Carousel className="text-aocDark py-20 lg:py-48">
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
