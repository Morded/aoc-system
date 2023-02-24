import Link from "next/link";

type ButtonProps = {
  href?: string;
  text: string;
  bgColor?: string;
  textColor?: string;
  wFull?: boolean;
  big?: boolean;
  onClick?: () => void
}

const Button = ({ href, text, bgColor, textColor, wFull, big, onClick }: ButtonProps) => {
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
        ${big ? 'md:text-3xl md:px-16 md:h-16' : ''}
      `

  if (href) 
    return (
      <Link href={href} className={classN}>
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
