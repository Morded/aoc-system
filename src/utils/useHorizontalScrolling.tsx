import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { RefObject, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useHorizontalScrolling = (scroller: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const skillSet: HTMLElement[] = gsap.utils.toArray('.feature-set');

    const to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (skillSet.length - 1), 
          duration: 0.3, 
          delay: 0.1, 
          ease: "power3.inOut"
        },

        end: () => `+=${window.innerWidth}`
      },
    });

    return () => {
      to.kill();
    };
  }, [scroller]);
}

export default useHorizontalScrolling

