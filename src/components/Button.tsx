import Link from "next/link";

type ButtonProps = {
  href?: string;
  text: string;
  bgColor?: string;
  textColor?: string;
  wFull?: boolean;
  big?: boolean;
  onClick?: () => void
  blank?: boolean
}

const Button = ({ href, text, bgColor, textColor, wFull, big, onClick, blank }: ButtonProps) => {
  const classN = `
        bg-aocDark tracking-wide px-8 bg-[url(/noise.png)]
        font-bold font-sans flex items-center h-10
        hover:opacity-60 md:transition-all
        md:w-fit md:rounded-full md:py-2 md:justify-center
        ${bgColor ? bgColor : 'bg-aocDark'}
        ${textColor ? textColor : 'text-aocLight'}
        ${wFull 
          ? `
            w-full rounded-none py-8 justify-start text-3xl 
            md:w-fit md:rounded-full md:py-2 md:justify-center md:text-base
          ` 
          : 'w-fit rounded-full py-2 justify-center text-base'
        }
        ${big ? 'md:text-2xl md:px-12 md:h-12' : ''}
      `

  if (href) 
    return (
      <Link href={href} className={classN} target={blank ? "_blank" : ""}>
        {text}
      </Link>
    )

  return (
    <div className={`${classN} cursor-pointer`} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button;
