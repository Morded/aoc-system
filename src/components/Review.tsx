import Link from "next/link"

type ReviewProps = {
  children: React.ReactNode
  by: string
  link: string
}

const Review = ({ children, by, link }:ReviewProps ) => {
  return (
    <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-20">
      <div className="text-base md:text-2xl leading-10 lg:leading-[3rem] tracking-tight font-bold text-aocDark">
        &ldquo;{children}&rdquo;
      </div>
      <div className="mt-6 text-aocDark">
        &mdash; <Link target="_blank" href={link} className="text-sm">{by}</Link>
      </div>
    </div>
  )
}

export default Review;
