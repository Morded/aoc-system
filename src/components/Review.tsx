import Link from "next/link"
import BodyText from "./BodyText"

type ReviewProps = {
  children: React.ReactNode
  by: string
  link: string
}

const Review = ({ children, by, link }:ReviewProps ) => {
  return (
    <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-20">
      <BodyText>
        <span className="font-bold">&ldquo;{children}&rdquo;</span>
      </BodyText>
      <div className="mt-6 text-aocDark">
        &mdash; <Link target="_blank" href={link} className="text-base hover:text-aocViolet transition-all">{by}</Link>
      </div>
    </div>
  )
}

export default Review;
