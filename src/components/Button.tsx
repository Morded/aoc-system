import Link from "next/link";

type ButtonProps = {
  href: string;
  text: string;
  bgColor?: string;
  textColor?: string;
  wFull?: boolean;
}

const Button = ({ href, text, bgColor, textColor, wFull }: ButtonProps) => {
  return (
    <Link 
      href={href} 
      className={`
        bg-aocDark text-base tracking-wide px-8 
        capitalize font-bold font-sans flex items-center h-10
        hover:opacity-60 md:transition-all
        md:w-fit md:rounded-full md:py-2 md:justify-center
        ${bgColor ? bgColor : 'bg-aocDark'}
        ${textColor ? textColor : 'text-aocLight'}
        ${wFull 
          ? 'w-full rounded-none py-6 justify-start' 
          : 'w-fit rounded-full py-2 justify-center'
        }
      `}
    >
      {text}
    </Link>
  )
}

export default Button;
